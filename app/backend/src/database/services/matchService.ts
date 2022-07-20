import matchesModel from '../models/MatchesModel';

export default class matchService {
  private model = matchesModel;

  matches = async () => {
    const match = await this.model.findAll({ include: ['teamHome', 'teamAway']});
    
    return match;
  }

}