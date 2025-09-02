import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiQuery } from "@nestjs/swagger";
import { ConsultaDto } from "./dto/consulta.dto";
import { ExameAgendamentoDto } from "./dto/exame-agendamento.dto";
import { ConsultaEntity } from "./entity/consulta.entity";
import { ExameAgendamentoEntity } from "./entity/exame-agendamento.entity";
import { PacienteService } from "./paciente.service";

@Controller("paciente")
export class PacienteController {
  constructor(private readonly service: PacienteService) {}

  @ApiOperation({ summary: "Cadastra uma consulta" })
  @ApiOkResponse({
    description: "Retorna a consulta salva",
    type: ConsultaEntity,
  })
  @Post("/consulta")
  async saveConsulta(@Body() dto: ConsultaDto) {
    return await this.service.saveConsulta(dto);
  }

  @ApiOperation({ summary: "agenda um exame" })
  @ApiOkResponse({
    description: "Retorna o exame agendado",
    type: ExameAgendamentoEntity,
  })
  @Post("/exame/agendar")
  async agendarExame(@Body() dto: ExameAgendamentoDto) {
    return await this.service.saveExameAgendamento(dto);
  }

  @ApiOperation({ summary: "visualiza um exame" })
  @ApiQuery({ name: "idExameAgendamento", required: true, type: Number, description: "id do exame agendado" })
  @ApiOkResponse({
    description: "Retorna o exame agendado",
    type: ExameAgendamentoEntity,
  })
  @Get("/exame/visualizar")
  async visualizarExame(@Query("idExameAgendamento") idAgendamento: number) {
    return await this.service.getExameAgendado(idAgendamento);
  }

  @ApiOperation({ summary: "visualiza uma consulta" })
  @ApiQuery({ name: "idConsulta", required: true, type: Number, description: "id da consulta agendada" })
  @ApiOkResponse({
    description: "Retorna a consulta agendada",
    type: ExameAgendamentoEntity,
  })
  @Get("/consulta/visualizar")
  async visualizarConsulta(@Query("idConsulta") idConsulta: number) {
    return await this.service.visualizarConsulta(idConsulta);
  }
}
