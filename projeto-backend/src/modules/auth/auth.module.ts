import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { DatabaseModule } from "database/database.module";
import { AuthController } from "./auth.controller";
import { AuthProviders } from "./auth.providers";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: "trabalho uninter",
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ...AuthProviders, AuthRepository, JwtStrategy],
})
export class AuthModule {}
