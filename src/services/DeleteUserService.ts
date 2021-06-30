import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/IUserRepository";

@injectable()
class DeleteUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(
    id: string
  ): Promise<any> {
    const respDelete = await this.userRepository.delete(id);

    let messageResult;

    if(respDelete?.affected === 1 || respDelete === 0) {
      messageResult = "User deleted";
    }

    return messageResult;
  }
}

export {
  DeleteUserService
};
