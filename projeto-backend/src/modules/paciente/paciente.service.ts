import { Injectable } from "@nestjs/common";
import { BaseError } from "error/base-error";
import { ExameError } from "error/messages/exame";
import { PacienteError } from "error/messages/paciente";
import { ProfissionalError } from "error/messages/profissional";
import { UnidadeSaudeError } from "error/messages/unidade-saude";
import { ConsultaDto } from "./dto/consulta.dto";
import { ExameAgendamentoDto } from "./dto/exame-agendamento.dto";
import { ConsultaEntity } from "./entity/consulta.entity";
import { ExameAgendamentoEntity } from "./entity/exame-agendamento.entity";
import { PacienteRepository } from "./paciente.repository";

@Injectable()
export class PacienteService {
  constructor(private pacienteRepository: PacienteRepository) {}

  async saveConsulta(dto: ConsultaDto) {
    const entity = new ConsultaEntity();

    const profissional = await this.pacienteRepository.findOneprofissionalSaude(dto.idProfissional);
    const paciente = await this.pacienteRepository.findOnePaciente(dto.idPaciente);
    const unidade = await this.pacienteRepository.findOneUnidadeSaude(dto.idUnidadeSaude);

    if (!unidade) throw new BaseError(UnidadeSaudeError.UNIDADE_SAUDE_001);
    if (!paciente) throw new BaseError(PacienteError.PACIENTE_001);
    if (!profissional) throw new BaseError(ProfissionalError.PROFISSIONAL_001);

    entity.profissional = profissional;
    entity.paciente = paciente;
    entity.unidadeSaude = unidade;
    entity.tipo = dto.tipo;
    entity.status = dto.status;
    entity.data = dto.data;
    entity.hora = dto.hora;

    return this.pacienteRepository.saveConsulta(entity);
  }

  async saveExameAgendamento(dto: ExameAgendamentoDto) {
    const entity = new ExameAgendamentoEntity();

    const profissional = await this.pacienteRepository.findOneprofissionalSaude(dto.idProfissional);
    const paciente = await this.pacienteRepository.findOnePaciente(dto.idPaciente);
    const exame = await this.pacienteRepository.findOneExame(dto.idExame);

    if (!paciente) throw new BaseError(PacienteError.PACIENTE_001);
    if (!profissional) throw new BaseError(ProfissionalError.PROFISSIONAL_001);
    if (!exame) throw new BaseError(ExameError.EXAME_001);

    entity.profissional = profissional;
    entity.paciente = paciente;
    entity.exame = exame;
    entity.status = dto.status;
    entity.dataSolicitacao = dto.dataSolicitacao;
    entity.dataRealizacao = dto.dataRealizacao;

    return await this.pacienteRepository.saveExameAgendamento(entity);
  }

  async getExameAgendado(id: number) {
    return this.pacienteRepository.getExameAgendado(id);
  }

  async visualizarConsulta(id: number) {
    return this.pacienteRepository.findConsulta(id);
  }
}
