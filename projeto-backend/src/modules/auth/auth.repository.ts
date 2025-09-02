import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UserEntity } from "../auth/entity/user.entity";

@Injectable()
export class AuthRepository {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<UserEntity>
  ) {}

  async findOneUser(email: string) {
    return await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
