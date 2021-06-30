import { IDataUser } from "../../dtos/IDataUser";
import { FakeUser } from "../../models/fakes/FakeUser";
import { IUser } from "../../models/dtos/IUser";
import { IUserRepository } from "../IUserRepository";


class FakeUserRepository implements IUserRepository {
  private userDataBase: IUser[] = [];
  async create(data: IDataUser): Promise<IUser> {
    const user = new FakeUser(data);

    this.userDataBase.push(user);

    return user;
  }

  async getUserByNickname(nickname: string): Promise<IUser | undefined> {
    const user = this.userDataBase.find(user => user.nickname === nickname);

    return user;
  }

}

export { FakeUserRepository };
