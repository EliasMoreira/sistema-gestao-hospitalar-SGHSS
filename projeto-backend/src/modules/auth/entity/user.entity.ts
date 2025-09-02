import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PacienteEntity } from "../../administracao/entity/paciente.entity";
import { ProfissionalSaudeEntity } from "../../administracao/entity/profissional-saude";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  senha: string;

  @OneToOne(() => PacienteEntity, (paciente) => paciente.user)
  paciente: PacienteEntity;

  @OneToOne(() => ProfissionalSaudeEntity, (profissional) => profissional.user)
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
