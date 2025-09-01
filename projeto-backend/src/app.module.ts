import { Module } from "@nestjs/common";
import { DatabaseModule } from "database/database.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AdministracaoModule } from "./modules/administracao/administracao.module";
import { PacienteModule } from "./modules/paciente/paciente.module";
import { ProfissionalSaudeModule } from './modules/profissional-saude/profissional-saude.module';

@Module({
  imports: [AdministracaoModule, DatabaseModule, PacienteModule, ProfissionalSaudeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
