import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { BaseErrorFilter } from "filter/base-error.filter";
import { ErrorExceptionFilter } from "filter/error-exception.filter";
import { HttpExceptionFilter } from "filter/http-exception.filter";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: /.*/ });
  app.useGlobalFilters(new HttpExceptionFilter(), new BaseErrorFilter(), new ErrorExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle("Sistema Gestão Hospitalar")
    .setDescription("Api do sistema de gestão hospitalar")
    .setVersion("1.0")
    .addTag("SGHSS")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  await app.listen(3000);
}
bootstrap();
