import { Request, Response, NextFunction } from "express";
import matchService from "../services/matchService";

export default class matchController {
  private service = new matchService();

  matches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const matches = await this.service.matches();
      return res.status(200).json(matches);
    } catch (error) {
      res.status(401).json({ message: 'Deu ruim :-( '});
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const match = await this.service.create(req.body);
      return res.status(200).json(match);
    } catch (error) {
      res.status(401).json({ message: 'Deu ruim :-( '});
    }
  };
      
};