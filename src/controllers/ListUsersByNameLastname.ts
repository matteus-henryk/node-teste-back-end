import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUsersNameLastNameService } from "../services/GetUsersNameLastnameService";

class ListUsersByNameLastname {
  async index(
    request: Request,
    response: Response
  ): Promise<Response> {
    const getUsersNameLastnameService = container.resolve(GetUsersNameLastNameService);

    const { name, lastname } = request.query;

    const users = await getUsersNameLastnameService.execute({
      name: name ? name.toString() : undefined,
      lastname: lastname ? lastname.toString() : undefined
    });

    return response.status(200).json(users);
  }
}
export default new ListUsersByNameLastname();
