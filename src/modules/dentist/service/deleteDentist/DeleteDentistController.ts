import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteDentistService } from "./DeleteDentistService";

class DeleteDentistController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeDentistService = container.resolve(DeleteDentistService);

    await removeDentistService.execute({ id });

    return response.json([]);
  }
}

export { DeleteDentistController };
