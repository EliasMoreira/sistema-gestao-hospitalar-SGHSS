import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ExameDto {
  @ApiProperty({ example: "Hemograma completo" })
  @IsString()
  nome: string;

  @ApiProperty({ example: "Jejum de 8 horas" })
  @IsString()
  orientacoes: string;

  @ApiProperty({ example: 150 })
  @IsNumber()
  custo: number;
}
