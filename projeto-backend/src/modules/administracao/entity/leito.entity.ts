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

@Entity({ name: "leito" })
export class LeitoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  ala: number;

  @Column()
  andar: number;

  @Column()
  quarto: number;

  @Column()
  setor: number;

  @ManyToOne(() => UnidadeSaudeEntity, (u) => u.leito)
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
