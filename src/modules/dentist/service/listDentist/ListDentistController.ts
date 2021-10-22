import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDentistService } from "./ListDentistService";

class ListDentistController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDentistService = container.resolve(ListDentistService);

    const dentists = await listDentistService.execute();

    return response.json(dentists);
  }
}

export { ListDentistController };
