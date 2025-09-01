import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { StatusExameEnum } from "../enum/status-exame.enum";

export class ExameAgendamentoDto {
  @ApiProperty({ enum: StatusExameEnum, example: StatusExameEnum.AGENDADO })
  @IsEnum(StatusExameEnum)
  status: StatusExameEnum;

  @ApiProperty({ example: "2025-09-01" })
  @IsString()
  dataSolicitacao: string;

  @ApiProperty({ example: "2025-09-05" })
  @IsString()
  dataRealizacao: string;

  @ApiProperty({ example: 1, description: "ID do profissional de saúde" })
  @IsNumber()
  idProfissional: number;

  @ApiProperty({ example: 1, description: "ID do paciente" })
  @IsNumber()
  idPaciente: number;

  @ApiProperty({ example: 1, description: "ID do exame" })
  @IsNumber()
  idExame: number;
}
