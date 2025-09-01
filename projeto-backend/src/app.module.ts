import { Module } from "@nestjs/common";
import { DatabaseModule } from "database/database.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AdministracaoModule } from "./modules/administracao/administracao.module";
import { ConsultaModule } from "./modules/consulta/consulta.module";

@Module({
  imports: [AdministracaoModule, ConsultaModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
