import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { BaseError } from "error/base-error";
import { AuthError } from "error/messages/auth";
import { UserError } from "error/messages/user";
import { AuthRepository } from "./auth.repository";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private authRepository: AuthRepository
  ) {}

  async findUser(email: string, senha: string) {
    const user = await this.authRepository.findOneUser(email);
    if (!user) throw new BaseError(UserError.USER_001);
    if (!(await bcrypt.compare(senha, user.senha))) {
      throw new BaseError(AuthError.AUTH_001);
    }

    const payload = {
      iss: "trabalho uninter",
      sub: user.id,
      name: user.email,
    };

    return this.jwtService.sign(payload, { expiresIn: `300s` });
  }
}
