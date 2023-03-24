import { db } from './../../model/index';
import * as ORM from 'sequelize';

export const User = db.sequelize.define(
  'user',
  {
    username: {
      type: ORM.DataTypes.STRING,
    },
    email: {
      type: ORM.DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email Already exists',
        name: 'email',
      },
    },
    id: {
      primaryKey: true,
      type: ORM.DataTypes.INTEGER,
      autoIncrement: true,
    },
    password: {
      type: ORM.DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    defaultScope: {
      attributes: {
        exclude: ['password'],
      },
    },
  }
);
