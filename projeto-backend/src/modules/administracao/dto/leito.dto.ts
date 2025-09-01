import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class LeitoDto {
  @ApiProperty({ example: "A101" })
  @IsString()
  numero: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  ala: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  andar: number;

  @ApiProperty({ example: 305 })
  @IsNumber()
  quarto: number;

  @ApiProperty({ example: 12 })
  @IsNumber()
  setor: number;

  @ApiProperty({ example: 1, description: "ID da unidade de saúde vinculada" })
  @IsNumber()
  unidadeSaude: number;
}
