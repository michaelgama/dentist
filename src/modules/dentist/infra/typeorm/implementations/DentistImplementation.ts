import { ICreateDentistDTO } from "@modules/dentist/dtos/ICreateDentistDTO";
import { IDentistRepository } from "@modules/dentist/repositories/IDentistRepository";
import { getRepository, Repository } from "typeorm";

import { Dentist } from "../entities/Dentist";

class DentistImplementation implements IDentistRepository {
  private repository: Repository<Dentist>;

  constructor() {
    this.repository = getRepository(Dentist);
  }

  async create({
    id,
    name,
    specialty_id,
  }: ICreateDentistDTO): Promise<Dentist> {
    const dentist = this.repository.create({
      id,
      name,
      specialty_id,
    });

    await this.repository.save(dentist);

    return dentist;
  }

  async findByspecialty(specialty_id: string): Promise<Dentist> {
    const specialtyByDentist = await this.repository.findOne({
      where: { specialty_id },
    });
    return specialtyByDentist;
  }

  async findByName(name: string): Promise<Dentist> {
    const dentist = await this.repository.findOne({
      where: {
        name,
      },
    });
    return dentist;
  }

  async findById(id: string): Promise<Dentist> {
    const dentist = await this.repository.findOne(id);
    return dentist;
  }

  async findByDentist(): Promise<Dentist[]> {
    const dentist = await this.repository.find();
    return dentist;
  }
}

export { DentistImplementation };
