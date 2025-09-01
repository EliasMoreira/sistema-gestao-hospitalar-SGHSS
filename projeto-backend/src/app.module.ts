import { Module } from "@nestjs/common";
import { DatabaseModule } from "database/database.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AdministracaoModule } from "./modules/administracao/administracao.module";

@Module({
  imports: [AdministracaoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
