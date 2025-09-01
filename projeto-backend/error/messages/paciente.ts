import { HttpStatus } from "@nestjs/common";

export const PacienteError = {
  PACIENTE_001: {
    code: "PACIENTE_001",
    status: HttpStatus.NOT_FOUND,
    message: "paciente nao encontrado",
  },
};
