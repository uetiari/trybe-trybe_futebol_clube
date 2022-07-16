import usersModel from '../models/UsersModel';
import { ILogin } from '../interfaces/index';
import * as BCrypt from 'bcryptjs';
import generateToken, { decoder } from '../helpers/jwtGenerate';

export default class userService {
  private model = usersModel;
  
  login = async (email: string, password: string) => {
    const user = await this.model.findOne({ where: { email }});
    if(!user) throw new Error('User not found!');

    if(!BCrypt.compareSync(password, user.password as string)) throw new Error('Invalid password!');

    const token = await generateToken(email, user.role);
    return { token };
  }

  loginValidate = async (token: string | undefined ) => {
    if (typeof token === 'string' ){
    const user = decoder(token)
    
    return { role: user.role };
    }
    return { error: 'Deu ruim :-(' };
    
  }
}