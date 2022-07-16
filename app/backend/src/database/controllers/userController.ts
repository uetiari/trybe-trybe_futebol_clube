import { Request, Response, NextFunction } from "express";
import userService from '../services/userService';

export default class Controller {
  private service = new userService(); 

  login = async (req: Request, res: Response, next: NextFunction) => {

    try {
      const { email, password } = req.body;
      const token = await this.service.login(email, password);
      
      return res.status(200).json(token);
    } catch (error) {
      
      res.status(401).json({ message: "Incorrect email or password" });
    }
  }

  loginValidate = async (req: Request, res: Response, next: NextFunction) => {

    try {
      const { authorization } = req.headers;
      const role = await this.service.loginValidate(authorization);
      
      return res.status(200).json(role);
    } catch (error) {
      
      res.status(401).json({ message: "Deu ruim :-(" });
    }
  }
  
}