import { Request, Response } from "express";
import { UpdateUserNicknameService } from "../services/UpdateUserNicknameService";
import { container } from "tsyringe";

class UpdateUserNicknameController {
  async update(
    request: Request,
    response: Response
  ): Promise<Response> {
    const updateUserNicknameService = container.resolve(UpdateUserNicknameService);

    const { id } = request.params;
    const { nickname } = request.body;

    const user = await updateUserNicknameService.execute({
      id,
      nickname
    });

    return response.status(200).json(user);
  }
}

export default new UpdateUserNicknameController();
