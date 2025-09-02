import { Body, Controller, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { AgendaAtendimentoDto } from "./dto/agenda.dto";
import { LaudoDto } from "./dto/laudo.dto";
import { ReceitaDto } from "./dto/receita.dto";
import { AgendaAtendimentoEntity } from "./entity/agenda-atendimento.entity";
import { LaudoEntity } from "./entity/laudo.entity";
import { ReceitaEntity } from "./entity/receita.entity";
import { ProfissionalSaudeService } from "./profissional-saude.service";

@Controller("profissional-saude")
export class ProfissionalSaudeController {
  constructor(private readonly service: ProfissionalSaudeService) {}

  @ApiOperation({ summary: "Cadastra um laudo" })
  @ApiOkResponse({
    description: "Retorna o laudo salvo",
    type: LaudoEntity,
  })
  @Post("/laudo")
  async saveLaudo(@Body() dto: LaudoDto) {
    return await this.service.saveLaudo(dto);
  }

  @ApiOperation({ summary: "Cadastra uma receita" })
  @ApiOkResponse({
    description: "Retorna a receita salva",
    type: ReceitaEntity,
  })
  @Post("/receita")
  async saveReceita(@Body() dto: ReceitaDto) {
    return await this.service.saveReceita(dto);
  }

  @ApiOperation({ summary: "Cadastra um horario para atendimento" })
  @ApiOkResponse({
    description: "Retorna o horario salvo",
    type: AgendaAtendimentoEntity,
  })
  @Post("/agenda-atendimento")
  async saveAgenda(@Body() dto: AgendaAtendimentoDto) {
    return await this.service.saveAgenda(dto);
  }
}
