import { Options } from 'sequelize/types/sequelize';

export const databaseConfig: Options = {
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'nationdata',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
