import { Module } from '@nestjs/common';
import { ProfissionalSaudeController } from './profissional-saude.controller';
import { ProfissionalSaudeService } from './profissional-saude.service';

@Module({
  controllers: [ProfissionalSaudeController],
  providers: [ProfissionalSaudeService]
})
export class ProfissionalSaudeModule {}
