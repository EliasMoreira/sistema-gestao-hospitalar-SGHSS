import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UnidadeSaudeEntity } from "./unidade-saude.entity";

@Entity({ name: "suprimento" })
export class SuprimentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  qtd: number;

  @ManyToOne(() => UnidadeSaudeEntity, (u) => u.suprimento)
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
