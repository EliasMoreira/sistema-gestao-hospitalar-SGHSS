import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PacienteEntity } from "./paciente.entity";
import { ProfissionalSaudeEntity } from "./profissional-saude";
import { UnidadeSaudeEntity } from "./unidade-saude.entity";

@Entity({ name: "convenio" })
export class ConvenioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @Column()
  status: string;

  @Column()
  abrangencia: string;

  @OneToMany(() => PacienteEntity, (p) => p.convenio)
  paciente: PacienteEntity[];

  @OneToMany(() => UnidadeSaudeEntity, (u) => u.convenio)
  unidadeSaude: UnidadeSaudeEntity[];

  @JoinTable({
    name: "convenio_profissional",
    joinColumn: {
      name: "convenio_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "profissional_id",
      referencedColumnName: "id",
    },
  })
  @ManyToMany(() => ProfissionalSaudeEntity, (p) => p.convenio, { cascade: true })
  profissionalSaude: ProfissionalSaudeEntity[];

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
