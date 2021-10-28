import { DentistImplementation } from "@modules/dentist/implementations/DentistImplementation";
import { SpecialtyImplementation } from "@modules/dentist/implementations/SpecialtyImplementation";
import { IDentistRepository } from "@modules/dentist/repositories/IDentistRepository";
import { ISpecialtyRepository } from "@modules/dentist/repositories/ISpecialtyRepository";
import { UsersImplementation } from "@modules/users/implementations/UsersImplementation";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
  "UsersImplementation",
  UsersImplementation
);

container.registerSingleton<IDentistRepository>(
  "DentistImplementation",
  DentistImplementation
);

container.registerSingleton<ISpecialtyRepository>(
  "SpecialtyImplementation",
  SpecialtyImplementation
);
