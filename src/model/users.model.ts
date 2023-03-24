import { DataTypes } from 'sequelize';
import { db } from './index';

export const Users = db.sequelize.define(
  'user',
  {
    username: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
