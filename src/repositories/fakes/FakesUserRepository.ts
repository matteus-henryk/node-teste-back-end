import { IDataUser } from "../../dtos/IDataUser";
import { FakeUser } from "../../models/fakes/FakeUser";
import { IUser } from "../../models/dtos/IUser";
import IUserRepository from "../IUserRepository";
import { IUserByNickname } from "dtos/IUserByNickname";


class FakeUserRepository implements IUserRepository {
  private userDataBase: IUser[] = [];
  async create(data: IDataUser): Promise<IUser> {
    const user = new FakeUser(data);

    this.userDataBase.push(user);

    return user;
  }

  async getUserByNickname(
    queryNickname: string
  ): Promise<IUserByNickname | undefined> {
    const user = this.userDataBase.find(user => user.nickname === queryNickname);

    return user
  }

  async getUserByName(
    name: string
  ): Promise<IUser[] | []> {
    const users = this.userDataBase.filter(user => user.name === name);

    return users;
  }

  async getUserByLastname(
    lastname: string
  ): Promise<IUser[] | []> {
    const users = this.userDataBase.filter(user => user.lastname === lastname);

    return users;
  }
}

export { FakeUserRepository };
