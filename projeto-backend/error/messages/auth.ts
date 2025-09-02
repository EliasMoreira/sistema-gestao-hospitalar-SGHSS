import { HttpStatus } from "@nestjs/common";

export const AuthError = {
  AUTH_001: {
    code: "AUTH_001",
    status: HttpStatus.FORBIDDEN,
    message: "Usuário não possui acesso a este recurso",
  },
};
