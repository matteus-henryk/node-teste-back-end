import { IDataUser } from "../dtos/IDataUser";
import IUserRepository from "../repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../models/User";

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

  async getUserByNickname(
    nickname: string
  ): Promise<User | undefined> {
    const user = this.userRepository.findOne({ nickname });

    return user;
  }
}


export {
  UserRepository
};
