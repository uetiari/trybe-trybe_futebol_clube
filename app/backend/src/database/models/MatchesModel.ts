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
  home_team: {
    type: DataTypes.NUMBER,
    allowNull: false, 
    references: {
      model: 'teams',
      key: 'id'
    }
  },
  home_team_goals: {
    type: DataTypes.NUMBER,
  },
  away_team: {
    type: DataTypes.NUMBER,
    allowNull: false, 
      references: {
      model: 'teams',
      key: 'id'
    }
},
  away_team_goals: {
    type: DataTypes.NUMBER,
  },
  in_progress: {
    type: DataTypes.BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(Teams, { foreignKey: 'home_team', as: 'homeTeam' })
Matches.belongsTo(Teams, { foreignKey: 'away_team', as: 'awayTeam' })
Teams.hasMany(Matches, { foreignKey: 'home_team', as: 'home_matches'})
Teams.hasMany(Matches, { foreignKey: 'away_team', as: 'away_matches'});