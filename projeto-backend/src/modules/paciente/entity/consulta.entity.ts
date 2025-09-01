import { PacienteEntity } from "src/modules/administracao/entity/paciente.entity";
import { ProfissionalSaudeEntity } from "src/modules/administracao/entity/profissional-saude";
import { UnidadeSaudeEntity } from "src/modules/administracao/entity/unidade-saude.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TipoConsultaEnum } from "../enum/tipo-consulta.enum";

@Entity({ name: "consulta" })
export class ConsultaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: TipoConsultaEnum;

  @Column()
  status: string;

  @Column()
  data: string;

  @Column()
  hora: string;

  @ManyToOne(() => ProfissionalSaudeEntity, (pf) => pf.consulta)
  @JoinColumn({ name: "idProfissional", referencedColumnName: "id" })
  profissional: ProfissionalSaudeEntity;

  @ManyToOne(() => PacienteEntity, (p) => p.consulta)
  @JoinColumn({ name: "idPaciente", referencedColumnName: "id" })
  paciente: PacienteEntity;

  @OneToOne(() => UnidadeSaudeEntity, (u) => u.consulta, { cascade: true })
  @JoinColumn({ name: "idUnidadeSaude", referencedColumnName: "id" })
  unidadeSaude: UnidadeSaudeEntity;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
