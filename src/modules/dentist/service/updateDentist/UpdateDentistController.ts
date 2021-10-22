import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateDentistService } from "./UpdateDentistService";

class UpdateDentistController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const updateDentistService = container.resolve(UpdateDentistService);

    const dentists = await updateDentistService.execute({ id, name });

    return response.status(201).json(dentists);
  }
}

export { UpdateDentistController };
