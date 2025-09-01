import { HttpStatus } from "@nestjs/common";

export const ProfissionalError = {
  PROFISSIONAL_001: {
    code: "PROFISSIONAL_001",
    status: HttpStatus.NOT_FOUND,
    message: "profissional de saude nao encontrado",
  },
};
