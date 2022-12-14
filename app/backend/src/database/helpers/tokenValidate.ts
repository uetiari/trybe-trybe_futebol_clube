import { Response, NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const tokenValidate = (req: Request, res: Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if(!authorization) throw new Error('Token must be a valid token');
  try {
    if (typeof authorization === "string") {
      const decoded = verify(authorization, SECRET);
      next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Token must be a valid token'});
  }
};

export default tokenValidate;
