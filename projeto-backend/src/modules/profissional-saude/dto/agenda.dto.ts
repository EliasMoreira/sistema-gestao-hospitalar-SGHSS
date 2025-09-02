import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AgendaAtendimentoDto {
  @ApiProperty({ example: "2025-09-01" })
  @IsString()
  dia: string;

  @ApiProperty({ example: "14:30" })
  @IsString()
  horario: string;

  @ApiProperty({ example: 1, description: "ID do profissional de saúde" })
  @IsNumber()
  idProfissional: number;
}
