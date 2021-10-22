import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDentistService } from "./CreateDentistService";

class CreateDentisController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, specialty_id } = request.body;

    const createDentistService = container.resolve(CreateDentistService);

    const dentist = await createDentistService.execute({ name, specialty_id });

    return response.status(201).json(dentist);
  }
}

export { CreateDentisController };
