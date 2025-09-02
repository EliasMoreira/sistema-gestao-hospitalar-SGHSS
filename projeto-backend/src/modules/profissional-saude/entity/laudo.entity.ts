import { ExameAgendamentoEntity } from "src/modules/paciente/entity/exame-agendamento.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "laudo" })
export class LaudoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  resultado: string;

  @OneToOne(() => ExameAgendamentoEntity, (e) => e.laudo)
  exameAgendamento: ExameAgendamentoEntity;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
