import { Test, TestingModule } from '@nestjs/testing';
import { ProfissionalSaudeService } from './profissional-saude.service';

describe('ProfissionalSaudeService', () => {
  let service: ProfissionalSaudeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfissionalSaudeService],
    }).compile();

    service = module.get<ProfissionalSaudeService>(ProfissionalSaudeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
