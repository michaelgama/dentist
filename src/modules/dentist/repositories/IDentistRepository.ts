import { ICreateDentistDTO } from "../dtos/ICreateDentistDTO";
import { Dentist } from "../infra/typeorm/entities/Dentist";

interface IDentistRepository {
  create(data: ICreateDentistDTO): Promise<Dentist>;
  findByName(name: string): Promise<Dentist>;
  findBySpecialty(specialty_id: string): Promise<Dentist>;
  findByDentist(): Promise<Dentist[]>;
  findById(name: string): Promise<Dentist>;
  remove(id: Dentist): Promise<void>;
}

export { IDentistRepository };
