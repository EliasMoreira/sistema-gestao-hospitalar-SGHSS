import { HttpStatus } from "@nestjs/common";

export const ExameError = {
  EXAME_001: {
    code: "EXAME_001",
    status: HttpStatus.NOT_FOUND,
    message: "exame nao encontrado",
  },
};
