import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecialtyService } from "./CreateSpecialtyService";

class CreateSpecialtyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSpecialtyService = container.resolve(CreateSpecialtyService);

    await createSpecialtyService.execute({ name });

    return response.status(201).send();
  }
}

export { CreateSpecialtyController };
