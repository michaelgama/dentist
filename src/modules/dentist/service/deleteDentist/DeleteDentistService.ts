import { IDentistRepository } from "@modules/dentist/repositories/IDentistRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

@injectable()
class DeleteDentistService {
  constructor(
    @inject("DentistImplementation")
    private dentistRepository: IDentistRepository
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const dentist = await this.dentistRepository.findById(id);

    if (!dentist) {
      throw new AppError("Dentist doesn't exist");
    }

    await this.dentistRepository.remove(dentist);
  }
}

export { DeleteDentistService };
