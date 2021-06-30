import { IDataUserUpdate } from "dtos/IDataUserUpdate";
import { DeleteResult } from "typeorm";
import { IDataUser } from "../dtos/IDataUser";
import { IUserByNickname } from "../dtos/IUserByNickname";
import { IUser } from "../models/dtos/IUser";


export default interface IUserRepository {
  create(data: IDataUser): Promise<IUser>;
  delete(id: string): Promise<any>
  getUserById(id: string): Promise<IUser | undefined>;
  getUserByName(name: string): Promise<IUser[] | []>;
  getUserByLastname(lastname: string): Promise<IUser[] | []>;
  getUserByNickname(nickname: string): Promise<IUserByNickname | undefined>;
  save(data: IUser): Promise<IUser | undefined>;
}
