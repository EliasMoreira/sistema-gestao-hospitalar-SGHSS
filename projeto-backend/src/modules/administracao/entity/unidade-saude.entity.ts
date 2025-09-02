import { ConsultaEntity } from "src/modules/paciente/entity/consulta.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConvenioEntity } from "./convenio.entity";
import { LeitoEntity } from "./leito.entity";
import { ProfissionalSaudeEntity } from "./profissional-saude";
import { SuprimentoEntity } from "./suprimento.entity";

@Entity({ name: "unidade_saude" })
export class UnidadeSaudeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  estado: string;

  @ManyToOne(() => ConvenioEntity, (c) => c.unidadeSaude)
  @JoinColumn({ name: "idConvenio", referencedColumnName: "id" })
  convenio: ConvenioEntity;

  @OneToMany(() => SuprimentoEntity, (s) => s.unidadeSaude)
  suprimento: SuprimentoEntity[];

  @OneToMany(() => LeitoEntity, (l) => l.unidadeSaude)
  leito: LeitoEntity[];

  @JoinTable({
    name: "unidade_saude_profissional",
    joinColumn: {
      name: "unidade_saude_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "profissional_id",
      referencedColumnName: "id",
    },
  })
  @ManyToMany(() => ProfissionalSaudeEntity, (p) => p.unidadeSaude, { cascade: true })
  profissionalSaude: ProfissionalSaudeEntity[];

  @OneToOne(() => ConsultaEntity, (c) => c.unidadeSaude)
  consulta: ConsultaEntity;

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
