import { ISpecialtyRepository } from "@modules/dentist/repositories/ISpecialtyRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
}

@injectable()
class CreateSpecialtyService {
  constructor(
    @inject("SpecialtyImplementation")
    private specialtyRepository: ISpecialtyRepository
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    const specialtyAlreadyExists = await this.specialtyRepository.findByName(
      name
    );

    if (specialtyAlreadyExists) {
      throw new AppError("Specialty already exists!");
    }

    this.specialtyRepository.create({ name });
  }
}

export { CreateSpecialtyService };
