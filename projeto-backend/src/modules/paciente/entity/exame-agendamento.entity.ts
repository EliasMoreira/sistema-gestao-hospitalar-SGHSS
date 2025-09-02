import { ExameEntity } from "src/modules/administracao/entity/exame.entity";
import { PacienteEntity } from "src/modules/administracao/entity/paciente.entity";
import { ProfissionalSaudeEntity } from "src/modules/administracao/entity/profissional-saude";
import { LaudoEntity } from "src/modules/profissional-saude/entity/laudo.entity";
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
import { StatusExameEnum } from "../enum/status-exame.enum";

@Entity({ name: "exame-agendamento" })
export class ExameAgendamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: StatusExameEnum;

  @Column()
  dataSolicitacao: string;

  @Column()
  dataRealizacao: string;

  @ManyToOne(() => ProfissionalSaudeEntity, (pf) => pf.exameAgendamento)
  @JoinColumn({ name: "idProfissional", referencedColumnName: "id" })
  profissional: ProfissionalSaudeEntity;

  @ManyToOne(() => PacienteEntity, (p) => p.exameAgendamento)
  @JoinColumn({ name: "idPaciente", referencedColumnName: "id" })
  paciente: PacienteEntity;

  @ManyToOne(() => ExameEntity, (e) => e.exameAgendamento)
  @JoinColumn({ name: "idExame", referencedColumnName: "id" })
  exame: ExameEntity;

  @OneToOne(() => LaudoEntity, (l) => l.exameAgendamento, { cascade: true })
  @JoinColumn({ name: "idLaudo", referencedColumnName: "id" })
  laudo: LaudoEntity;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
