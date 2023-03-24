import * as ORM from 'sequelize';
import { databaseConfig } from './../config/db';

const sequelize = new ORM.Sequelize({
  ...databaseConfig,
});

export const db = {
  Sequelize: ORM.Sequelize,
  sequelize,
};
