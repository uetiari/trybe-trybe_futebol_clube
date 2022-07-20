import { Model, DataTypes } from 'sequelize';
import db from '.';
import Teams from './TeamsModel';

export default class Matches extends Model {
  public id: number;
  public homeTeam: string;
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

Matches.belongsTo(Teams, { foreignKey: 'home_team', as: 'teamHome' })
Matches.belongsTo(Teams, { foreignKey: 'away_team', as: 'teamAway' })
Teams.hasMany(Matches, { foreignKey: 'home_team', as: 'homeMatches'})
Teams.hasMany(Matches, { foreignKey: 'away_team', as: 'awayMatches'});