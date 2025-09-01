import { Module } from "@nestjs/common";
import { DatabaseModule } from "database/database.module";
import { PacienteController } from "./paciente.controller";
import { PacienteProviders } from "./paciente.providers";
import { PacienteRepository } from "./paciente.repository";
import { PacienteService } from "./paciente.service";

@Module({
  imports: [DatabaseModule],
  providers: [PacienteService, ...PacienteProviders, PacienteRepository],
  controllers: [PacienteController],
})
export class PacienteModule {}
