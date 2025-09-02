import { Module } from "@nestjs/common";
import { DatabaseModule } from "database/database.module";
import { ProfissionalSaudeController } from "./profissional-saude.controller";
import { ProfissionalSaudeProviders } from "./profissional-saude.providers";
import { ProfissionalSaudeRepository } from "./profissional-saude.repository";
import { ProfissionalSaudeService } from "./profissional-saude.service";

@Module({
  imports: [DatabaseModule],
  controllers: [ProfissionalSaudeController],
  providers: [ProfissionalSaudeService, ...ProfissionalSaudeProviders, ProfissionalSaudeRepository],
})
export class ProfissionalSaudeModule {}
