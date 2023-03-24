import { db } from '../../model';
import * as ORM from 'sequelize';

export const Province = db.sequelize.define(
  'province',
  {
    nameen: {
      type: ORM.DataTypes.STRING,
    },
    namenp: {
      type: ORM.DataTypes.STRING,
    },
    id: {
      type: ORM.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
