import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ReceitaDto {
  @ApiProperty({ example: "Tomar 1 comprimido de Dipirona 500mg a cada 8h" })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 1, description: "ID da consulta vinculada" })
  @IsNumber()
  idConsulta: number;

  @ApiProperty({ example: 1, description: "ID do profissional de saúde" })
  @IsNumber()
  idProfissional: number;
}
