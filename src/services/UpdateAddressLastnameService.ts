import { IDataUserUpdate } from "../dtos/IDataUserUpdate";
import IUserRepository from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IUser } from "../models/dtos/IUser";
import ErrorsApp from "../errors/ErrorsApp";


@injectable()
class UpdateAddessLastnameService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(
    data: IDataUserUpdate
  ): Promise<IUser | undefined> {
    const user = await this.userRepository.getUserById(data.id);

    if(!user) {
      throw new ErrorsApp("User not exists!", 404);
    }

    Object.assign(user, {
      lastname: data.lastname,
      address: data.address
    });

    const userSaved = await this.userRepository.save(user);

    return userSaved;
  }
}

export { UpdateAddessLastnameService };
