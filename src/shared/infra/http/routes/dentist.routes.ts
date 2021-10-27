import { CreateDentisController } from "@modules/dentist/service/createDentist/CreateDentistController";
import { DeleteDentistController } from "@modules/dentist/service/deleteDentist/DeleteDentistController";
import { ListDentistController } from "@modules/dentist/service/listDentist/ListDentistController";
import { UpdateDentistController } from "@modules/dentist/service/updateDentist/UpdateDentistController";
import { Router } from "express";

import { ensureAuthenticaded } from "../middleware/ensureAuthenticated";

const dentistRoutes = Router();

const createDentistController = new CreateDentisController();
const listDentistController = new ListDentistController();
const updateDentistController = new UpdateDentistController();
const deleteDentistController = new DeleteDentistController();

dentistRoutes.post("/", ensureAuthenticaded, createDentistController.handle);

dentistRoutes.get("/", ensureAuthenticaded, listDentistController.handle);

dentistRoutes.put("/:id", ensureAuthenticaded, updateDentistController.handle);

dentistRoutes.delete(
  "/:id",
  ensureAuthenticaded,
  deleteDentistController.handle
);

export { dentistRoutes };
