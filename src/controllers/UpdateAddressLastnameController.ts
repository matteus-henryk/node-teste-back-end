import { Request, Response } from "express";
import { UpdateAddessLastnameService } from "../services/UpdateAddressLastnameService";
import { container } from "tsyringe";

class UpdateAddressLastnameController {
  async update(
    request: Request,
    response: Response
  ): Promise<Response> {
    const updateAddressLastnameService = container.resolve(UpdateAddessLastnameService);

    const { id } = request.params;
    const { lastname, address } = request.body;

    const user = await updateAddressLastnameService.execute({ id, lastname, address });

    return response.status(200).json(user);
  }
}

export default new UpdateAddressLastnameController();
