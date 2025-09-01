import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { AdministracaoService } from "./administracao.service";
import { ConvenioDto } from "./dto/convenio.dto";
import { PacienteDto } from "./dto/paciente.dto";
import { ProfissionalSaudeDto } from "./dto/profissional-saude.dto";
import { UnidadeSaudeDto } from "./dto/unidade-saude.dto";
import { UserDto } from "./dto/user.dto";
import { ConvenioEntity } from "./entity/convenio.entity";
import { PacienteEntity } from "./entity/paciente.entity";
import { ProfissionalSaudeEntity } from "./entity/profissional-saude";
import { UnidadeSaudeEntity } from "./entity/unidade-saude.entity";
import { UserEntity } from "./entity/user.entity";

@Controller("administracao")
export class AdministracaoController {
  constructor(private readonly service: AdministracaoService) {}

  @ApiOperation({ summary: "Cadastra um convenio" })
  @ApiOkResponse({
    description: "Retorna o convenio salvo",
    type: ConvenioEntity,
  })
  @Post("/convenio")
  async saveConvenio(@Body() dto: ConvenioDto) {
    return await this.service.saveConvenio(dto);
  }

  @ApiOperation({ summary: "Cadastrar uma unidade de saude" })
  @ApiOkResponse({
    description: "Retorna a unidade de saude salva",
    type: UnidadeSaudeEntity,
  })
  @Post("/unidade-saude")
  async saveUnidadeSaude(@Body() dto: UnidadeSaudeDto) {
    return await this.service.saveUnidadeSaude(dto);
  }

  @ApiOperation({ summary: "Cadastrar um paciente" })
  @ApiOkResponse({
    description: "Retorna o paciente",
    type: PacienteEntity,
  })
  @Post("/paciente")
  async savePaciente(@Body() dto: PacienteDto) {
    return await this.service.savePaciente(dto);
  }

  @ApiOperation({ summary: "Cadastrar um usuario" })
  @ApiOkResponse({
    description: "Retorna o usuario salvo",
    type: UserEntity,
  })
  @Post("/user")
  async saveUser(@Body() dto: UserDto) {
    return await this.service.saveUser(dto);
  }

  @ApiOperation({ summary: "Cadastrar um profissional de saude" })
  @ApiOkResponse({
    description: "Retorna o profissional salvo",
    type: ProfissionalSaudeEntity,
  })
  @Post("/profissional")
  async saveProfissionalSaude(@Body() dto: ProfissionalSaudeDto) {
    return await this.service.saveProfissionalSaude(dto);
  }
}
