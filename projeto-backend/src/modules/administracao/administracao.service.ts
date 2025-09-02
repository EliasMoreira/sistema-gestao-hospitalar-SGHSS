import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { BaseError } from "error/base-error";
import { ConvenioError } from "error/messages/convenio";
import { UnidadeSaudeError } from "error/messages/unidade-saude";
import { UserError } from "error/messages/user";
import { UserEntity } from "../auth/entity/user.entity";
import { AdministracaoRepository } from "./administracao.repository";
import { ConvenioDto } from "./dto/convenio.dto";
import { ExameDto } from "./dto/exame.dto";
import { LeitoDto } from "./dto/leito.dto";
import { PacienteDto } from "./dto/paciente.dto";
import { ProfissionalSaudeDto } from "./dto/profissional-saude.dto";
import { SuprimentoDto } from "./dto/suprimento.dto";
import { UnidadeSaudeDto } from "./dto/unidade-saude.dto";
import { UserDto } from "./dto/user.dto";
import { ConvenioEntity } from "./entity/convenio.entity";
import { ExameEntity } from "./entity/exame.entity";
import { LeitoEntity } from "./entity/leito.entity";
import { PacienteEntity } from "./entity/paciente.entity";
import { ProfissionalSaudeEntity } from "./entity/profissional-saude";
import { SuprimentoEntity } from "./entity/suprimento.entity";
import { UnidadeSaudeEntity } from "./entity/unidade-saude.entity";

@Injectable()
export class AdministracaoService {
  constructor(private administracaoRepository: AdministracaoRepository) {}

  async saveConvenio(dto: ConvenioDto) {
    const convenioEntity = new ConvenioEntity();
    convenioEntity.nome = dto.nome;
    convenioEntity.cnpj = dto.cnpj;
    convenioEntity.status = dto.status;
    convenioEntity.abrangencia = dto.abrangencia;
    return this.administracaoRepository.saveConvenio(convenioEntity);
  }

  async saveUnidadeSaude(dto: UnidadeSaudeDto) {
    const entity = new UnidadeSaudeEntity();
    const convenio = await this.administracaoRepository.findOneConvenio(dto.idConvenio);
    if (!convenio) throw new BaseError(ConvenioError.CONVENIO_001);
    entity.convenio = convenio;
    entity.endereco = dto.endereco;
    entity.telefone = dto.telefone;
    entity.estado = dto.estado;
    entity.nome = dto.nome;
    return this.administracaoRepository.saveUnidadeSaude(entity);
  }

  async saveUser(dto: UserDto) {
    const entity = new UserEntity();
    entity.email = dto.email;
    entity.senha = await bcrypt.hash(dto.senha, 10);
    return this.administracaoRepository.saveUser(entity);
  }

  async savePaciente(dto: PacienteDto) {
    const entity = new PacienteEntity();
    const user = await this.administracaoRepository.findOneUser(dto.idUser);
    const convenio = await this.administracaoRepository.findOneConvenio(dto.idConvenio);

    if (!user) throw new BaseError(UserError.USER_001);
    if (!convenio) throw new BaseError(ConvenioError.CONVENIO_001);

    entity.convenio = convenio;
    entity.user = user;
    entity.nome = dto.nome;
    entity.telefone = dto.telefone;
    entity.sexo = dto.sexo;
    entity.tipo = dto.tipo;

    return this.administracaoRepository.savePaciente(entity);
  }

  async saveProfissionalSaude(dto: ProfissionalSaudeDto) {
    const entity = new ProfissionalSaudeEntity();

    const user = await this.administracaoRepository.findOneUser(dto.user);

    if (!user) throw new BaseError(UserError.USER_001);

    entity.user = user;
    entity.unidadeSaude = dto.idUnidadeSaude?.map((id) => ({ id }) as UnidadeSaudeEntity);
    entity.convenio = dto.idConvenio?.map((id) => ({ id }) as ConvenioEntity);
    entity.nome = dto.nome;
    entity.telefone = dto.telefone;
    entity.sexo = dto.sexo;
    entity.especialidade = dto.especialidade;
    return await this.administracaoRepository.saveProfissional(entity);
  }

  async saveLeito(dto: LeitoDto) {
    const entity = new LeitoEntity();

    const unidade = await this.administracaoRepository.findOneUnidadeSaude(dto.unidadeSaude);

    if (!unidade) throw new BaseError(UnidadeSaudeError.UNIDADE_SAUDE_001);

    entity.unidadeSaude = unidade;
    entity.numero = dto.numero;
    entity.ala = dto.ala;
    entity.andar = dto.andar;
    entity.quarto = dto.quarto;
    entity.setor = dto.setor;

    return this.administracaoRepository.saveLeito(entity);
  }

  async saveSuprimento(dto: SuprimentoDto) {
    const entity = new SuprimentoEntity();
    const unidade = await this.administracaoRepository.findOneUnidadeSaude(dto.unidadeSaude);

    if (!unidade) throw new BaseError(UnidadeSaudeError.UNIDADE_SAUDE_001);

    entity.nome = dto.nome;
    entity.qtd = dto.qtd;
    entity.unidadeSaude = unidade;

    return this.administracaoRepository.saveSuprimento(entity);
  }

  async saveExame(dto: ExameDto) {
    const entity = new ExameEntity();
    entity.nome = dto.nome;
    entity.orientacoes = dto.orientacoes; // entidade estava como number, mas faz mais sentido string
    entity.custo = dto.custo;

    return this.administracaoRepository.saveExame(entity);
  }
}
