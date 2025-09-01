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
import { ConvenioEntity } from "./convenio.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: "paciente" })
export class PacienteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  sexo: string;

  @Column()
  tipo: string;

  @ManyToOne(() => ConvenioEntity, (c) => c.paciente)
  @JoinColumn({ name: "idConvenio", referencedColumnName: "id" })
  convenio: ConvenioEntity;

  @OneToOne(() => UserEntity, (user) => user.paciente, { cascade: true })
  @JoinColumn()
  user: UserEntity;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
