import { DataSource } from "typeorm";
import { ConvenioEntity } from "./entity/convenio.entity";
import { ExameEntity } from "./entity/exame.entity";
import { LeitoEntity } from "./entity/leito.entity";
import { PacienteEntity } from "./entity/paciente.entity";
import { ProfissionalSaudeEntity } from "./entity/profissional-saude";
import { SuprimentoEntity } from "./entity/suprimento.entity";
import { UnidadeSaudeEntity } from "./entity/unidade-saude.entity";
import { UserEntity } from "./entity/user.entity";

export const AdministracaoProviders = [
  {
    provide: "PACIENTE_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PacienteEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "CONVENIO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ConvenioEntity),
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
    provide: "LEITO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LeitoEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "SUPRIMENTO_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(SuprimentoEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "USER_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "EXAME_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ExameEntity),
    inject: ["DATA_SOURCE"],
  },
];
