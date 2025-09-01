import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UserDto {
  @ApiProperty({ example: "João@gmail.com" })
  @IsString()
  email: string;

  @ApiProperty({ example: "senh123" })
  @IsString()
  senha: string;
}
