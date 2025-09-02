import { ProfissionalSaudeEntity } from "src/modules/administracao/entity/profissional-saude";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "agenda-atendimento" })
export class AgendaAtendimentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dia: string;

  @Column()
  horario: string;

  @Column()
  disponivel: boolean;

  @OneToOne(() => ProfissionalSaudeEntity, (p) => p.agenda, { cascade: true })
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
