import { HttpStatus } from "@nestjs/common";

export const ConsultaError = {
  CONSULTA_001: {
    code: "CONSULTA_001",
    status: HttpStatus.NOT_FOUND,
    message: "consulta nao encontrado",
  },
};
