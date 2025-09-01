import { Module } from "@nestjs/common";
import { DatabaseModule } from "database/database.module";
import { AdministracaoController } from "./administracao.controller";
import { AdministracaoProviders } from "./administracao.providers";
import { AdministracaoRepository } from "./administracao.repository";
import { AdministracaoService } from "./administracao.service";

@Module({
  imports: [DatabaseModule],
  controllers: [AdministracaoController],
  providers: [...AdministracaoProviders, AdministracaoService, AdministracaoRepository],
})
export class AdministracaoModule {}
