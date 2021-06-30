import { IDataUser } from "../../dtos/IDataUser";
import { FakeUser } from "../../models/fakes/FakeUser";
import { IUser } from "../../models/dtos/IUser";
import IUserRepository from "../IUserRepository";
import { IUserByNickname } from "dtos/IUserByNickname";
import { DeleteResult } from "typeorm";


class FakeUserRepository implements IUserRepository {
  private userDataBase: IUser[] = [];
  async create(data: IDataUser): Promise<IUser> {
    const user = new FakeUser(data);

    this.userDataBase.push(user);

    return user;
  }

  async delete(
    id: string
  ): Promise<any> {
    const indexUser = this.userDataBase.findIndex(user => user.id === id);

    this.userDataBase.splice(indexUser, 1);

    return indexUser;
  }

  async getUserById(
    id: string
  ): Promise<IUser | undefined> {
    const user = this.userDataBase.find(user => user.id === id);

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

  async save(
    user: IUser
  ): Promise<IUser | undefined> {
    const indexOfUser = this.userDataBase.findIndex(userDb => userDb.id === user.id);

    this.userDataBase.splice(indexOfUser, 1);

    this.userDataBase.push(user);

    const userSaved = this.userDataBase.find(userDb => userDb.id === user.id);

    return userSaved;
  }
}

export { FakeUserRepository };
