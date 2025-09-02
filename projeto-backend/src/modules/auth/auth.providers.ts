import { DataSource } from "typeorm";
import { UserEntity } from "../auth/entity/user.entity";

export const AuthProviders = [
  {
    provide: "USER_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ["DATA_SOURCE"],
  },
];
