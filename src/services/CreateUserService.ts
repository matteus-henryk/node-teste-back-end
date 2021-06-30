import { inject, injectable } from "tsyringe";
import ErrorsApp from "../errors/ErrorsApp";
import { IDataUser } from "../dtos/IDataUser";
import { IUser } from "../models/dtos/IUser";
import IUserRepository from "../repositories/IUserRepository";

@injectable()
class CreateUserService {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(data: IDataUser): Promise<IUser> {

    const nicknameAlreadyExists = await this.userRepository.getUserByNickname(data.nickname);

    if(nicknameAlreadyExists) {
      throw new ErrorsApp("Nickname in use!", 401);
    }

    const user = await this.userRepository.create(data);

    return user;
  }
}

export {
  CreateUserService
};
