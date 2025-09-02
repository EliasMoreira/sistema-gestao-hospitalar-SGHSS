import { Controller, Get, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiQuery } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiOperation({ summary: "login" })
  @ApiQuery({ name: "email", required: true, type: String, description: "email" })
  @ApiQuery({ name: "senha", required: true, type: String, description: "senha" })
  @ApiOkResponse({
    description: "Retorna um token",
    type: String,
  })
  @Get("/login")
  async visualizarConsulta(@Query("email") email: string, @Query("senha") senha: string) {
    return await this.service.findUser(email, senha);
  }
}
