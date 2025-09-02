import { ProfissionalSaudeEntity } from "src/modules/administracao/entity/profissional-saude";
import { ConsultaEntity } from "src/modules/paciente/entity/consulta.entity";
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

@Entity({ name: "receita" })
export class ReceitaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @OneToOne(() => ConsultaEntity, (c) => c.receita, { cascade: true })
  @JoinColumn({ name: "idConsulta", referencedColumnName: "id" })
  consulta: ConsultaEntity;

  @ManyToOne(() => ProfissionalSaudeEntity, (p) => p.receita)
  @JoinColumn({ name: "idProfissional", referencedColumnName: "id" })
  profissional: ProfissionalSaudeEntity;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
