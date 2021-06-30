import { UserRepository } from "../repositories/UserRepository";
import IUserRepository from "../repositories/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
);
