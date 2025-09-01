import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";

export class ProfissionalSaudeDto {
  @ApiProperty({ example: "Maria Souza" })
  @IsString()
  nome: string;

  @ApiProperty({ example: "(11) 99999-0000" })
  @IsString()
  telefone: string;

  @ApiProperty({ example: "FEMININO" })
  @IsString()
  sexo: string;

  @ApiProperty({ example: "Cardiologia" })
  @IsString()
  especialidade: string;

  @ApiProperty({ example: [1, 2], type: [Number], description: "IDs dos convênios vinculados" })
  @IsArray()
  idConvenio: number[];

  @ApiProperty({ example: [1], type: [Number], description: "IDs das unidades de saude vinculada" })
  @IsArray()
  idUnidadeSaude: number[];

  @ApiProperty({ example: 2, description: "ID do usuário vinculado" })
  @IsNumber()
  user: number;
}
