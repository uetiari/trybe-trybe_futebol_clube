import { Request, Response, NextFunction } from "express";
import teamService from "../services/teamService";

export default class teamsController {
  private service = new teamService();

  teams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teams = await this.service.teams();
      return res.status(200).json(teams);
    } catch (error) {
      res.status(401).json({ message: 'Deu ruim :-( '});
    }
  }

  teamById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const teamById = await this.service.teamById(id);
      return res.status(200).json(teamById);
    } catch (error) {
      res.status(401).json({ message: 'Deu ruim :-( '});
    }
  }
}