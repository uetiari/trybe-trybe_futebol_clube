import teamsModel from '../models/TeamsModel';

export default class teamsService {
  private model = teamsModel;

  teams = async () => {
    const teams = await this.model.findAll();
    
    return teams;
  }
}