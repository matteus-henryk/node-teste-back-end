import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class UserController {

  async create(
    request: Request,
    response: Response
  ): Promise<Response> {
    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute(request.body);

    return response.status(201).json(user);
  }
}

export { UserController };
