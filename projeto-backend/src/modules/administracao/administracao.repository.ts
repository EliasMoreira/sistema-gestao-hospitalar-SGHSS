import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ConvenioEntity } from "./entity/convenio.entity";
import { LeitoEntity } from "./entity/leito.entity";
import { PacienteEntity } from "./entity/paciente.entity";
import { ProfissionalSaudeEntity } from "./entity/profissional-saude";
import { SuprimentoEntity } from "./entity/suprimento.entity";
import { UnidadeSaudeEntity } from "./entity/unidade-saude.entity";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class AdministracaoRepository {
  constructor(
    @Inject("PACIENTE_REPOSITORY")
    private pacienteRepository: Repository<PacienteEntity>,
    @Inject("CONVENIO_REPOSITORY")
    private convenioRepository: Repository<ConvenioEntity>,
    @Inject("UNIDADE_SAUDE_REPOSITORY")
    private unidadeSaudeRepository: Repository<UnidadeSaudeEntity>,
    @Inject("PROFISSIONAL_SAUDE_REPOSITORY")
    private profissionalSaudeRepository: Repository<ProfissionalSaudeEntity>,
    @Inject("LEITO_REPOSITORY")
    private leitoRepository: Repository<LeitoEntity>,
    @Inject("SUPRIMENTO_REPOSITORY")
    private suprimentoRepository: Repository<SuprimentoEntity>,
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<UserEntity>
  ) {}

  async saveConvenio(convenio: ConvenioEntity) {
    return await this.convenioRepository.save(convenio);
  }

  async findOneConvenio(id: number) {
    return await this.convenioRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async saveUnidadeSaude(unidadeEntity: UnidadeSaudeEntity) {
    return await this.unidadeSaudeRepository.save(unidadeEntity);
  }

  async findOneUnidadeSaude(id: number) {
    return await this.unidadeSaudeRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async saveUser(user: UserEntity) {
    return await this.userRepository.save(user);
  }

  async findOneUser(id: number) {
    return await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async savePaciente(paciente: PacienteEntity) {
    return await this.pacienteRepository.save(paciente);
  }

  async findOnePaciente(id: number) {
    return await this.pacienteRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async saveProfissional(entity: ProfissionalSaudeEntity) {
    return await this.profissionalSaudeRepository.save(entity);
  }

  async findOneprofissionalSaude(id: number) {
    return await this.profissionalSaudeRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
