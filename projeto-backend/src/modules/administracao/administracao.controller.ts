import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { AdministracaoService } from "./administracao.service";
import { ConvenioDto } from "./dto/convenio.dto";
import { ExameDto } from "./dto/exame.dto";
import { LeitoDto } from "./dto/leito.dto";
import { PacienteDto } from "./dto/paciente.dto";
import { ProfissionalSaudeDto } from "./dto/profissional-saude.dto";
import { UnidadeSaudeDto } from "./dto/unidade-saude.dto";
import { UserDto } from "./dto/user.dto";
import { ConvenioEntity } from "./entity/convenio.entity";
import { ExameEntity } from "./entity/exame.entity";
import { LeitoEntity } from "./entity/leito.entity";
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

  @ApiOperation({ summary: "Cadastrar um leito" })
  @ApiOkResponse({
    description: "Retorna o leito salvo",
    type: LeitoEntity,
  })
  @Post("/leito")
  async saveLeito(@Body() dto: LeitoDto) {
    return await this.service.saveLeito(dto);
  }

  @ApiOperation({ summary: "Cadastrar um exame" })
  @ApiOkResponse({
    description: "Retorna o exame salvo",
    type: ExameEntity,
  })
  @Post("/exame")
  async saveExame(@Body() dto: ExameDto) {
    return await this.service.saveExame(dto);
  }
}
