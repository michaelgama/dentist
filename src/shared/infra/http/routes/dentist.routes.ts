import { CreateDentisController } from "@modules/dentist/service/createDentist/CreateDentistController";
import { ListDentistController } from "@modules/dentist/service/listDentist/ListDentistController";
import { UpdateDentistController } from "@modules/dentist/service/updateDentist/UpdateDentistController";
import { Router } from "express";

const dentistRoutes = Router();

const createDentistController = new CreateDentisController();
const listDentistController = new ListDentistController();
const updateDentistController = new UpdateDentistController();

dentistRoutes.post("/", createDentistController.handle);

dentistRoutes.put("/:id", updateDentistController.handle);

dentistRoutes.get("/", listDentistController.handle);

export { dentistRoutes };
