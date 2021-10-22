import { Dentist } from "@modules/dentist/infra/typeorm/entities/Dentist";
import { IDentistRepository } from "@modules/dentist/repositories/IDentistRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
  name: string;
}

@injectable()
class UpdateDentistService {
  constructor(
    @inject("DentistImplementation")
    private dentistRepository: IDentistRepository
  ) {}

  async execute({ id, name }: IRequest): Promise<Dentist> {
    const dentist = await this.dentistRepository.findById(id);

    if (!dentist) {
      throw new AppError("Dentist doesn't exist");
    }

    dentist.name = name;

    await this.dentistRepository.create(dentist);
    return dentist;
  }
}

export { UpdateDentistService };
