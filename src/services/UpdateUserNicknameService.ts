import "reflect-metadata";
import { IUserUpdateNickname } from "../dtos/IUserUpdateNickname";
import { IUser } from "../models/dtos/IUser";
import IUserRepository from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import ErrorsApp from "../errors/ErrorsApp";

@injectable()
class UpdateUserNicknameService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(
    data: IUserUpdateNickname
  ): Promise<IUser | undefined> {
    const user = await this.userRepository.getUserById(data.id);

    const nicknameAlreadyExists = await this.userRepository.getUserByNickname(data.nickname);

    if(!user) {
      throw new ErrorsApp("User not exists!", 404);
    }

    if(nicknameAlreadyExists) {
      throw new ErrorsApp("Nickname in use!", 401);
    }

    Object.assign(user, {
      nickname: data.nickname
    });

    const userSaved = await this.userRepository.save(user);

    return userSaved;
  }
}

export { UpdateUserNicknameService };
