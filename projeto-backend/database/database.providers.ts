import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "pj-backend",
  entities: ["dist/**/modules/**/entity/*{.ts,.js}"],
  migrationsTableName: "migrations",
  migrations: ["dist/**/migrations/*{.ts,.js}"],
  migrationsTransactionMode: "all",
  synchronize: true,
  migrationsRun: false,
  logging: false,
});

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
