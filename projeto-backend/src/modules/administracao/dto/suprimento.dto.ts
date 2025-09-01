import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class SuprimentoDto {
  @ApiProperty({ example: "Seringas" })
  @IsString()
  nome: string;

  @ApiProperty({ example: 2000 })
  @IsNumber()
  qtd: number;

  @ApiProperty({ example: 1, description: "ID da unidade de saúde vinculada" })
  @IsNumber()
  unidadeSaude: number;
}
