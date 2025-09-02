import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ExameEntity } from "../administracao/entity/exame.entity";
import { ProfissionalSaudeEntity } from "../administracao/entity/profissional-saude";
import { UserEntity } from "../administracao/entity/user.entity";
import { ConsultaEntity } from "../paciente/entity/consulta.entity";
import { ExameAgendamentoEntity } from "../paciente/entity/exame-agendamento.entity";
import { AgendaAtendimentoEntity } from "./entity/agenda-atendimento.entity";
import { LaudoEntity } from "./entity/laudo.entity";
import { ReceitaEntity } from "./entity/receita.entity";

@Injectable()
export class ProfissionalSaudeRepository {
  constructor(
    @Inject("PROFISSIONAL_SAUDE_REPOSITORY")
    private profissionalSaudeRepository: Repository<ProfissionalSaudeEntity>,
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<UserEntity>,
    @Inject("CONSULTA_REPOSITORY")
    private consultaRepository: Repository<ConsultaEntity>,
    @Inject("EXAME_AGENDAMENTO_REPOSITORY")
    private exameAgendamentoRepository: Repository<ExameAgendamentoEntity>,
    @Inject("EXAME_REPOSITORY")
    private exameRepository: Repository<ExameEntity>,
    @Inject("LAUDO_REPOSITORY")
    private laudoRepository: Repository<LaudoEntity>,
    @Inject("RECEITA_REPOSITORY")
    private receitaRepository: Repository<ReceitaEntity>,
    @Inject("AGENDA_REPOSITORY")
    private agendaRepository: Repository<AgendaAtendimentoEntity>
  ) {}

  async saveLaudo(entity: LaudoEntity) {
    return await this.laudoRepository.save(entity);
  }

  async findOneExameAgendamento(id: number) {
    return await this.exameAgendamentoRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async saveReceita(entity: ReceitaEntity) {
    return await this.receitaRepository.save(entity);
  }

  async findOneprofissionalSaude(id: number) {
    return await this.profissionalSaudeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findOneConsulta(id: number) {
    return await this.consultaRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async saveAgenda(entity: AgendaAtendimentoEntity) {
    return await this.agendaRepository.save(entity);
  }
}
