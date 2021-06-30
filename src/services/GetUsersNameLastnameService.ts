import "reflect-metadata";
import { IFilterUser } from "dtos/IFilterUser";
import ErrorsApp from "../errors/ErrorsApp";
import { IUser } from "models/dtos/IUser";
import IUserRepository from "../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetUsersNameLastNameService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(
    filters: IFilterUser
  ): Promise<IUser[] | []> {

    let users: IUser[] = [];

    if(filters.name && filters.lastname) {
      let userByName = await this.userRepository.getUserByName(filters.name);
      let userByLastname = await this.userRepository.getUserByLastname(filters.lastname);

      users.push(...userByName, ...userByLastname);
    }

    if(filters.name && !filters.lastname) {
      let userByName = await this.userRepository.getUserByName(filters.name);

      users.push(...userByName);
    }

    if(!filters.name && filters.lastname) {
      let userByLastname = await this.userRepository.getUserByLastname(filters.lastname);

      users.push(...userByLastname);
    }

    if(!filters.name && !filters.lastname) {
      throw new ErrorsApp("No users found!", 404);
    }

    return users;
  }
}

export { GetUsersNameLastNameService };
