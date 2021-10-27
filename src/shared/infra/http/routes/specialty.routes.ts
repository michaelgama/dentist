import { CreateSpecialtyController } from "@modules/dentist/service/createSpecialty/CreateSpecialtyController";
import { Router } from "express";

import { ensureAuthenticaded } from "../middleware/ensureAuthenticated";

const specialtyRoutes = Router();

const createSpecialtyController = new CreateSpecialtyController();

specialtyRoutes.post(
  "/",
  ensureAuthenticaded,
  createSpecialtyController.handle
);

export { specialtyRoutes };
