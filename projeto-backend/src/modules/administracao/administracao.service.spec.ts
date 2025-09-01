import { Test, TestingModule } from "@nestjs/testing";
import { AdministracaoService } from "./administracao.service";

describe("AdministracaoService", () => {
  let service: AdministracaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministracaoService],
    }).compile();

    service = module.get<AdministracaoService>(AdministracaoService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
