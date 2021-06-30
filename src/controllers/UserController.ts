import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";


class UserController {
  async create(
    request: Request,
    response: Response
  ): Promise<Response> {
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute(request.body);

    return response.status(201).json(user);
  }

  async delete(
    request: Request,
    response: Response
  ): Promise<Response> {
    const deleteUserService = container.resolve(DeleteUserService);

    const { id } = request.params;

    const message = await deleteUserService.execute(id);

    return response.status(200).json({ message });
  }
}

export default new UserController();
