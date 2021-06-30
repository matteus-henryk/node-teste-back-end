import { IUserByNickname } from "../dtos/IUserByNickname";
import ErrorsApp from "../errors/ErrorsApp";
import IUserRepository from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetUserByNicknameService {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(
    nickname: string
  ): Promise<IUserByNickname | undefined> {
    const user = await this.userRepository.getUserByNickname(nickname);

    if(!user) {
      throw new ErrorsApp("User not found!", 404);
    }

    return user ?
    {
      name: user.name,
      lastname: user.lastname,
      nickname: user.nickname
    } : undefined;
  }
}

export { GetUserByNicknameService };
