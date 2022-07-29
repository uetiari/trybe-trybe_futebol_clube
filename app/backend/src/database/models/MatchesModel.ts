import { Model, DataTypes } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

export default class Matches extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: boolean;
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: DataTypes.NUMBER,
    allowNull: false, 
    references: {
      model: 'teams',
      key: 'id'
    }
  },
  homeTeamGoals: {
    type: DataTypes.NUMBER,
  },
  awayTeam: {
    type: DataTypes.NUMBER,
    allowNull: false, 
      references: {
      model: 'teams',
      key: 'id'
    }
},
  awayTeamGoals: {
    type: DataTypes.NUMBER,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' })
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' })
Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeMatches'})
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayMatches'});