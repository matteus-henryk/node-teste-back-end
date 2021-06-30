import { IUserByNickname } from "../dtos/IUserByNickname";
import { IUser } from "../models/dtos/IUser";
import { getRepository, Repository } from "typeorm";
import { IDataUser } from "../dtos/IDataUser";
import { User } from "../models/User";
import IUserRepository from "../repositories/IUserRepository";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>

  constructor() {
    this.userRepository = getRepository<User>(User);
  }

  async create(
    data: IDataUser
  ): Promise<User> {
    const user = this.userRepository.create(data);

    await this.userRepository.save(user);

    return user;
  }

  async getUserById(
    id: string
  ): Promise<User | undefined> {
    const user = this.userRepository.findOne({ id });

    return user;
  }

  async getUserByNickname(
    nickname: string
  ): Promise<IUserByNickname | undefined> {
    const user = await this.userRepository.findOne({ nickname });

    return user
  }

  async getUserByName(
    name: string
  ): Promise<User[] | []> {
    const users = await this.userRepository.find({ name });

    return users;
  }

  async getUserByLastname(
    lastname: string
  ): Promise<User[] | []> {
    const users = await this.userRepository.find({ lastname });

    return users;
  }

  async save(
    user: IUser
  ): Promise<User | undefined> {

    return await this.userRepository.save(user)
  }
}


export {
  UserRepository
};
