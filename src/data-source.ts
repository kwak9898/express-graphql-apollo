import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { User } from "./entity/User";

dotenv.config();

export const dataSourceConfig = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: false,
});
