import { HttpStatus } from "@nestjs/common";

export const ExameAgendamentoError = {
  EXAME_AGENDAMENTO_001: {
    code: "EXAME_AGENDAMENTO_001",
    status: HttpStatus.NOT_FOUND,
    message: "exame agendado nao encontrado",
  },
};
