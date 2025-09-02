import { Injectable } from "@nestjs/common";
import { BaseError } from "error/base-error";
import { ConsultaError } from "error/messages/consulta";
import { ExameAgendamentoError } from "error/messages/exame-agendamento";
import { ProfissionalError } from "error/messages/profissional";
import { AgendaAtendimentoDto } from "./dto/agenda.dto";
import { LaudoDto } from "./dto/laudo.dto";
import { ReceitaDto } from "./dto/receita.dto";
import { AgendaAtendimentoEntity } from "./entity/agenda-atendimento.entity";
import { LaudoEntity } from "./entity/laudo.entity";
import { ReceitaEntity } from "./entity/receita.entity";
import { ProfissionalSaudeRepository } from "./profissional-saude.repository";

@Injectable()
export class ProfissionalSaudeService {
  constructor(private profissionalRepository: ProfissionalSaudeRepository) {}

  async saveLaudo(dto: LaudoDto) {
    const entity = new LaudoEntity();

    const agendamento = await this.profissionalRepository.findOneExameAgendamento(dto.idExameAgendamento);

    if (!agendamento) throw new BaseError(ExameAgendamentoError.EXAME_AGENDAMENTO_001);

    entity.exameAgendamento = agendamento;
    entity.resultado = dto.resultado;

    return await this.profissionalRepository.saveLaudo(entity);
  }

  async saveReceita(dto: ReceitaDto) {
    const entity = new ReceitaEntity();

    const profissional = await this.profissionalRepository.findOneprofissionalSaude(dto.idProfissional);
    const consulta = await this.profissionalRepository.findOneConsulta(dto.idConsulta);

    if (!profissional) throw new BaseError(ProfissionalError.PROFISSIONAL_001);
    if (!consulta) throw new BaseError(ConsultaError.CONSULTA_001);

    entity.descricao = dto.descricao;
    entity.profissional = profissional;
    entity.consulta = consulta;

    return this.profissionalRepository.saveReceita(entity);
  }

  async saveAgenda(dto: AgendaAtendimentoDto) {
    const entity = new AgendaAtendimentoEntity();

    const profissional = await this.profissionalRepository.findOneprofissionalSaude(dto.idProfissional);

    if (!profissional) throw new BaseError(ProfissionalError.PROFISSIONAL_001);

    entity.profissional = profissional;
    entity.dia = dto.dia;
    entity.horario = dto.horario;
    entity.disponivel = true;

    return this.profissionalRepository.saveAgenda(entity);
  }
}
