import { ICreateDentistDTO } from "../dtos/ICreateDentistDTO";
import { Dentist } from "../infra/typeorm/entities/Dentist";

interface IDentistRepository {
  create(data: ICreateDentistDTO): Promise<Dentist>;
  findByName(name: string): Promise<Dentist>;
  findByspecialty(specialty_id: string): Promise<Dentist>;
  findByDentist(): Promise<Dentist[]>;
  findById(name: string): Promise<Dentist>;
}

export { IDentistRepository };
