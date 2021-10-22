import { Router } from "express";

import { dentistRoutes } from "./dentist.routes";
import { specialtyRoutes } from "./specialty.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/dentist", dentistRoutes);
router.use("/specialty", specialtyRoutes);

export { router };
