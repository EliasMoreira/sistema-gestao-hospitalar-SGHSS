import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "exame" })
export class ExameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  orientacoes: number;

  @Column()
  custo: number;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
