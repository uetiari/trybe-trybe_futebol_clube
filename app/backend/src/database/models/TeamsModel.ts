import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Teams extends Model {
  public id: number;
  public teamName: string;
}

Teams.init({
  id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  }, 
  teamName:{
    type: DataTypes.STRING
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});
