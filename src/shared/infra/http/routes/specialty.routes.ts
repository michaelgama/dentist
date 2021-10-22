import { CreateSpecialtyController } from "@modules/dentist/service/createSpecialty/CreateSpecialtyController";
import { Router } from "express";

const specialtyRoutes = Router();

const createSpecialtyController = new CreateSpecialtyController();

specialtyRoutes.post("/", createSpecialtyController.handle);

export { specialtyRoutes };
