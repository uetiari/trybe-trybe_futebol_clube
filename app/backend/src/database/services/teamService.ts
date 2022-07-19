import teamsModel from '../models/TeamsModel';

export default class teamsService {
  private model = teamsModel;

  teams = async () => {
    const teams = await this.model.findAll();
    
    return teams;
  }

  teamById = async (id: string) => {
    const teamById = await this.model.findByPk(id );
    if(!teamById) throw new Error('Team not found!');

    return teamById;
  }
}