import { Dentist } from "@modules/dentist/infra/typeorm/entities/Dentist";
import { IDentistRepository } from "@modules/dentist/repositories/IDentistRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListDentistService {
  constructor(
    @inject("DentistImplementation")
    private dentistRepository: IDentistRepository
  ) {}

  async execute(): Promise<Dentist[]> {
    const dentist = await this.dentistRepository.findByDentist();

    return dentist;
  }
}

export { ListDentistService };
