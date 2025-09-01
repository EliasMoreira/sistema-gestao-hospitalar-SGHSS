import { NestFactory } from "@nestjs/core";
import { BaseErrorFilter } from "filter/base-error.filter";
import { ErrorExceptionFilter } from "filter/error-exception.filter";
import { HttpExceptionFilter } from "filter/http-exception.filter";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: /.*/ });
  app.useGlobalFilters(new HttpExceptionFilter(), new BaseErrorFilter(), new ErrorExceptionFilter());
  await app.listen(3000);
}
bootstrap();
