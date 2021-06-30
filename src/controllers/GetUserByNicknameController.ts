import { Request, Response } from "express";
import { GetUsersNameLastNameService } from "services/GetUsersNameLastnameService";
import { container } from "tsyringe";
import { GetUserByNicknameService } from "../services/GetUserByNicknameService";


class GetUserByNicknameController {
  async show(
    request: Request,
    response: Response
  ): Promise<Response> {
    const getUserByNicknameService = container.resolve(GetUserByNicknameService);

    const { nickname } = request.params;

    const user = await getUserByNicknameService.execute(nickname);

    return response.status(200).json(user);
  }
}

export default new GetUserByNicknameController();
