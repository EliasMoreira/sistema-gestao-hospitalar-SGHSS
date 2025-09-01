import { HttpStatus } from "@nestjs/common";

export const UnidadeSaudeError = {
  UNIDADE_SAUDE_001: {
    code: "UNIDADE_SAUDE_001",
    status: HttpStatus.NOT_FOUND,
    message: "unidade saude nao encontrada",
  },
};
