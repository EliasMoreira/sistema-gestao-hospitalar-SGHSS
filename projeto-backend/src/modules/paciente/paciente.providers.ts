import { DataSource } from "typeorm";
import { ExameEntity } from "../administracao/entity/exame.entity";
import { PacienteEntity } from "../administracao/entity/paciente.entity";
import { ProfissionalSaudeEntity } from "../administracao/entity/profissional-saude";
import { UnidadeSaudeEntity } from "../administracao/entity/unidade-saude.entity";
import { UserEntity } from "../administracao/entity/user.entity";
import { ConsultaEntity } from "./entity/consulta.entity";
import { ExameAgendamentoEntity } from "./entity/exame-agendamento.entity";

export const PacienteProviders = [
  {
    provide: "PACIENTE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PacienteEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "UNIDADE_SAUDE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UnidadeSaudeEntity),
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
];
