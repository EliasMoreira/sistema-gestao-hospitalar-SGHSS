import { ConsultaEntity } from "src/modules/paciente/entity/consulta.entity";
import { ExameAgendamentoEntity } from "src/modules/paciente/entity/exame-agendamento.entity";
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
import { ConvenioEntity } from "./convenio.entity";
import { UnidadeSaudeEntity } from "./unidade-saude.entity";
import { UserEntity } from "./user.entity";

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

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
