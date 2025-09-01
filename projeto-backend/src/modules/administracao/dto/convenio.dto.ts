import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ConvenioDto {
  @ApiProperty({ example: "Unimed" })
  @IsString()
  nome: string;

  @ApiProperty({ example: "12.345.678/0001-99" })
  @IsString()
  cnpj: string;

  @ApiProperty({ example: "ATIVO" })
  @IsString()
  status: string;

  @ApiProperty({ example: "NACIONAL" })
  @IsString()
  abrangencia: string;
}
