import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class LaudoDto {
  @ApiProperty({ example: "Resultado dentro dos parâmetros normais." })
  @IsString()
  resultado: string;

  @ApiProperty({ example: 1, description: "ID do exame agendamento vinculado" })
  @IsNumber()
  idExameAgendamento: number;
}
