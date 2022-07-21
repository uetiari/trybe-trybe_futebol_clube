import matchesModel from '../models/MatchesModel';

export default class matchService {
  private model = matchesModel;

  matches = async () => {
    const match = await this.model.findAll({ include: ['teamHome', 'teamAway']});
    
    return match;
  }

  create = async (data:object) => {
    try {
      const created = await this.model.create({ ...data, inProgress: true });
      
      return created;
    } catch (error) {
      throw new Error("There is no team with such id")
    }
  }
  // Ref.: https://github.com/tryber/sd-017-trybe-futebol-clube/pull/56

  update = async (id:string) => {
    const updatedMatch = await this.model.update({ inProgress: false }, { where: { id }});
    return { message: "Updated" };
  }

  inProgressUp = async (id:string, body:object) => {
    const inProgressUp = await this.model.update(body, { where: { id }});
    return { message: "Match in Progress updated" };
  }
}