import { IDataUser } from "../dtos/IDataUser";
import { IUser } from "../models/dtos/IUser";
import { IUserByNickname } from "../dtos/IUserByNickname";


export default interface IUserRepository {
  create(data: IDataUser): Promise<IUser>;
  getUserByName(name: string): Promise<IUser[] | []>;
  getUserByLastname(lastname: string): Promise<IUser[] | []>;
  getUserByNickname(nickname: string): Promise<IUserByNickname | undefined>;
}
