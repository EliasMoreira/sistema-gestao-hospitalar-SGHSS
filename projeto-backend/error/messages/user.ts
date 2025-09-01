import { HttpStatus } from "@nestjs/common";

export const UserError = {
  USER_001: {
    code: "USER_001",
    status: HttpStatus.NOT_FOUND,
    message: "user not found",
  },
};
