import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class UnidadeSaudeDto {
  @ApiProperty({ example: "Av. BURITI, 350 - Manaus/AM" })
  @IsString()
  endereco: string;

  @ApiProperty({ example: "(11) 3333-4444" })
  @IsString()
  telefone: string;

  @ApiProperty({ example: "SP" })
  @IsString()
  estado: string;

  @ApiProperty({ example: 1, description: "ID do convênio vinculado" })
  @IsNumber()
  idConvenio: number;
}
