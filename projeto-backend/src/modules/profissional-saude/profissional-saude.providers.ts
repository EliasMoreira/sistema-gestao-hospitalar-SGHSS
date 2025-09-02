import { DataSource } from "typeorm";
import { ExameEntity } from "../administracao/entity/exame.entity";
import { ProfissionalSaudeEntity } from "../administracao/entity/profissional-saude";
import { UserEntity } from "../auth/entity/user.entity";
import { ConsultaEntity } from "../paciente/entity/consulta.entity";
import { ExameAgendamentoEntity } from "../paciente/entity/exame-agendamento.entity";
import { AgendaAtendimentoEntity } from "./entity/agenda-atendimento.entity";
import { LaudoEntity } from "./entity/laudo.entity";
import { ReceitaEntity } from "./entity/receita.entity";

export const ProfissionalSaudeProviders = [
  {
    provide: "LAUDO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LaudoEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "PROFISSIONAL_SAUDE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ProfissionalSaudeEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "USER_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "CONSULTA_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ConsultaEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "EXAME_AGENDAMENTO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ExameAgendamentoEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "EXAME_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ExameEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "RECEITA_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ReceitaEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "AGENDA_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AgendaAtendimentoEntity),
    inject: ["DATA_SOURCE"],
  },
];
