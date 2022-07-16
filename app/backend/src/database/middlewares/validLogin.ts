import { Request, Response, NextFunction } from "express";

export const validEmail = (req:Request, res:Response, next:NextFunction) => {
  const { email } = req.body;

  if (email === undefined || email === '') {
    return res.status(400).json({ message: "All fields must be filled" });
  }
  
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email.match(regex)) {
    return res.status(401).json({ message: "Incorrect email or password" });
  }

  next();
};

export const validPassword = (req:Request, res:Response, next:NextFunction) => {
  const { password } = req.body;

  if (password === undefined || password === '') {
    return res.status(400).json({ "message": "All fields must be filled" });
  }

  if (password.length < 6) {
    return res.status(401).json({ message: "Incorrect email or password" });
  }

  next();
};