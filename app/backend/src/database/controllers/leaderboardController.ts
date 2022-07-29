import { Request, Response, NextFunction } from 'express';
import LearderboardService from '../services/leaderdboard';

export default class learderboardController {
  static getHome = async (_req: Request, res: Response, next: NextFunction) => {
    try {
    const teams = await LearderboardService.getHome();
    
    return res.status(200).json(teams.leaderboard);
  } catch (e) {
    next(e);
  }}
};