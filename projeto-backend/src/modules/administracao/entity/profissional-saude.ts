import { ConsultaEntity } from "src/modules/paciente/entity/consulta.entity";
import { ExameAgendamentoEntity } from "src/modules/paciente/entity/exame-agendamento.entity";
import { AgendaAtendimentoEntity } from "src/modules/profissional-saude/entity/agenda-atendimento.entity";
import { ReceitaEntity } from "src/modules/profissional-saude/entity/receita.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "../../auth/entity/user.entity";
import { ConvenioEntity } from "./convenio.entity";
import { UnidadeSaudeEntity } from "./unidade-saude.entity";

@Entity({ name: "profissional_saude" })
export class ProfissionalSaudeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  sexo: string;

  @Column()
  especialidade: string;

  @ManyToMany(() => ConvenioEntity, (c) => c.profissionalSaude)
  convenio?: ConvenioEntity[];

  @ManyToMany(() => UnidadeSaudeEntity, (u) => u.profissionalSaude)
  unidadeSaude?: UnidadeSaudeEntity[];

  @OneToOne(() => UserEntity, (user) => user.profissional, { cascade: true })
  @JoinColumn()
  user: UserEntity;

  @OneToMany(() => ConsultaEntity, (c) => c.profissional)
  consulta: ConsultaEntity[];

  @OneToMany(() => ExameAgendamentoEntity, (e) => e.profissional)
  exameAgendamento: ExameAgendamentoEntity[];

  @OneToMany(() => ReceitaEntity, (r) => r.profissional)
  receita: ReceitaEntity[];

  @OneToOne(() => AgendaAtendimentoEntity, (at) => at.profissional)
  agenda: AgendaAtendimentoEntity;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
