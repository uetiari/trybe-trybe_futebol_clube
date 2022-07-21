import { Request, Response, NextFunction } from "express";

export const validMatch = (req:Request, res:Response, next:NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(401).json({ message: "It is not possible to create a match with two equal teams" });
  }
  if (!homeTeam || !awayTeam) {
    return res.status(404).json({ message: "There is no team with such id!" });
  }
  next();
};