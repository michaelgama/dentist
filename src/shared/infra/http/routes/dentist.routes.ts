import { CreateDentisController } from "@modules/dentist/service/createDentist/CreateDentistController";
import { DeleteDentistController } from "@modules/dentist/service/deleteDentist/DeleteDentistController";
import { ListDentistController } from "@modules/dentist/service/listDentist/ListDentistController";
import { UpdateDentistController } from "@modules/dentist/service/updateDentist/UpdateDentistController";
import { Router } from "express";

const dentistRoutes = Router();

const createDentistController = new CreateDentisController();
const listDentistController = new ListDentistController();
const updateDentistController = new UpdateDentistController();
const deleteDentistController = new DeleteDentistController();

dentistRoutes.post("/", createDentistController.handle);

dentistRoutes.get("/", listDentistController.handle);

dentistRoutes.put("/:id", updateDentistController.handle);

dentistRoutes.delete("/:id", deleteDentistController.handle);

export { dentistRoutes };
