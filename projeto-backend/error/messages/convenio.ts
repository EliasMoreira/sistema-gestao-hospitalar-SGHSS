import { HttpStatus } from "@nestjs/common";

export const ConvenioError = {
  CONVENIO_001: {
    code: "CONVENIO_001",
    status: HttpStatus.NOT_FOUND,
    message: "convenio nao encontrado",
  },
};
