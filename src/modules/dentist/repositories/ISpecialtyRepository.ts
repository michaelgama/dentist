import { Specialty } from "../entities/Specialty";

interface ICreateSpecialtyDTO {
  name: string;
}

interface ISpecialtyRepository {
  create({ name }: ICreateSpecialtyDTO): Promise<void>;
  findByName(name: string): Promise<Specialty>;
}

export { ISpecialtyRepository, ICreateSpecialtyDTO };
