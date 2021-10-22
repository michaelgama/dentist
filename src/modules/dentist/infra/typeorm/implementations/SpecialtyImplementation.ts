import {
  ISpecialtyRepository,
  ICreateSpecialtyDTO,
} from "@modules/dentist/repositories/ISpecialtyRepository";
import { getRepository, Repository } from "typeorm";

import { Specialty } from "../entities/Specialty";

class SpecialtyImplementation implements ISpecialtyRepository {
  private repository: Repository<Specialty>;

  constructor() {
    this.repository = getRepository(Specialty);
  }

  async create({ name }: ICreateSpecialtyDTO): Promise<void> {
    const specialty = this.repository.create({
      name,
    });

    await this.repository.save(specialty);
  }

  async findByName(name: string): Promise<Specialty> {
    const specialty = await this.repository.findOne({ name });
    return specialty;
  }
}

export { SpecialtyImplementation };
