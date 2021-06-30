import { IDataUser } from "../dtos/IDataUser";
import { IUser } from "../models/dtos/IUser";


export default interface IUserRepository {
  create(data: IDataUser): Promise<IUser>;
  getUserByNickname(nickname: string): Promise<IUser | undefined>;
}

// export {
//   IUserRepository
// ;
