import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ExameEntity } from "../administracao/entity/exame.entity";
import { PacienteEntity } from "../administracao/entity/paciente.entity";
import { ProfissionalSaudeEntity } from "../administracao/entity/profissional-saude";
import { UnidadeSaudeEntity } from "../administracao/entity/unidade-saude.entity";
import { UserEntity } from "../administracao/entity/user.entity";
import { ConsultaEntity } from "./entity/consulta.entity";
import { ExameAgendamentoEntity } from "./entity/exame-agendamento.entity";

@Injectable()
export class PacienteRepository {
  constructor(
    @Inject("PACIENTE_REPOSITORY")
    private pacienteRepository: Repository<PacienteEntity>,
    @Inject("UNIDADE_SAUDE_REPOSITORY")
    private unidadeSaudeRepository: Repository<UnidadeSaudeEntity>,
    @Inject("PROFISSIONAL_SAUDE_REPOSITORY")
    private profissionalSaudeRepository: Repository<ProfissionalSaudeEntity>,
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<UserEntity>,
    @Inject("CONSULTA_REPOSITORY")
    private consultaRepository: Repository<ConsultaEntity>,
    @Inject("EXAME_AGENDAMENTO_REPOSITORY")
    private exameAgendamentoRepository: Repository<ExameAgendamentoEntity>,
    @Inject("EXAME_REPOSITORY")
    private exameRepository: Repository<ExameEntity>
  ) {}

  async saveConsulta(entity: ConsultaEntity) {
    return await this.consultaRepository.save(entity);
  }

  async findOneConsulta(id: number) {
    return await this.consultaRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findOnePaciente(id: number) {
    return await this.pacienteRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findOneprofissionalSaude(id: number) {
    return await this.profissionalSaudeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findOneUnidadeSaude(id: number) {
    return await this.unidadeSaudeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async saveExameAgendamento(entity: ExameAgendamentoEntity) {
    return await this.exameAgendamentoRepository.save(entity);
  }

  async findOneExame(id: number) {
    return await this.exameRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
