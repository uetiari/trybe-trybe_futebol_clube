import { sign, SignOptions, verify } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';
const jsonwebOptions: SignOptions = { expiresIn: '5h', algorithm: 'HS256' };

const generateToken = async (email: string, role: string): Promise<string> => {
  const token = sign({ email, role }, SECRET, jsonwebOptions);

  return token;
};

export default generateToken;

export const decoder = (token: string) => {
  try {
  const decoded: any = verify(token, SECRET);
  return decoded;
  } catch (err) {
  return false;
  }
  }; 