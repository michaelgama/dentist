import { Dentist } from "@modules/dentist/infra/typeorm/entities/Dentist";
import { IDentistRepository } from "@modules/dentist/repositories/IDentistRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  specialty_id: string;
}

@injectable()
class CreateDentistService {
  constructor(
    @inject("DentistImplementation")
    private dentistRepository: IDentistRepository
  ) {}

  async execute({ name, specialty_id }: IRequest): Promise<Dentist> {
    const specialtyDentistExists = await this.dentistRepository.findByspecialty(
      specialty_id
    );

    if (!specialty_id) {
      throw new AppError("required specialty!");
    }

    if (!specialtyDentistExists) {
      throw new AppError("specialty does not exist!");
    }

    const dentist = await this.dentistRepository.create({
      name,
      specialty_id,
    });

    return dentist;
  }
}

export { CreateDentistService };
