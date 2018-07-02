export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
}

export const databaseConfig: DatabaseConfig = {
  username: "admin",
  password: "admin",
  database: "sequelize_typescript_examples",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: true,
  force: true,
  timezone: "+00:00"
};
