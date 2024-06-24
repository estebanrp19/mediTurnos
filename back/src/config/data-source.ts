import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false, //* Pasar a false cuando se termine el proyecto
  dropSchema: false,   //* Pasar a false cuando se termine el proyecto
  logging: true,
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: [],
});
