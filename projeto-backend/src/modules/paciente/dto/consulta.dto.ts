import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { TipoConsultaEnum } from "../enum/tipo-consulta.enum";

export class ConsultaDto {
  @ApiProperty({ enum: TipoConsultaEnum, example: TipoConsultaEnum.PRESENCIAL })
  @IsEnum(TipoConsultaEnum)
  tipo: TipoConsultaEnum;

  @ApiProperty({ example: "Agendada" })
  @IsString()
  status: string;

  @ApiProperty({ example: "2025-09-10" })
  @IsString()
  data: string;

  @ApiProperty({ example: "14:30" })
  @IsString()
  hora: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  idProfissional: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  idPaciente: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  idUnidadeSaude: number;
}
