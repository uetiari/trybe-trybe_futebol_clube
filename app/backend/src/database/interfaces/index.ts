export interface IUser {
  username: string,
  email: string,
  password: string,
  role: string
}

export type ILogin = Omit<IUser, 'username' | 'role'>;

export interface IMatchesGoals {
  goalsFavor: number,
  goalsOwn: number,
}