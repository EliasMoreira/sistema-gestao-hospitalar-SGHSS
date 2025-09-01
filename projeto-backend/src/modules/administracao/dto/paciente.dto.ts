import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class PacienteDto {
  @ApiProperty({ example: "João da Silva" })
  @IsString()
  nome: string;

  @ApiProperty({ example: "(11) 99999-8888" })
  @IsString()
  telefone: string;

  @ApiProperty({ example: "MASCULINO" })
  @IsString()
  sexo: string;

  @ApiProperty({ example: "CONVENIO" })
  @IsString()
  tipo: string;

  @ApiProperty({ example: 1, description: "ID do convênio vinculado" })
  @IsNumber()
  idConvenio: number;

  @ApiProperty({ example: 1, description: "ID do usuário vinculado" })
  @IsNumber()
  idUser: number;
}
