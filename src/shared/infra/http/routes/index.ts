import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { dentistRoutes } from "./dentist.routes";
import { specialtyRoutes } from "./specialty.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/dentist", dentistRoutes);
router.use("/specialty", specialtyRoutes);
router.use(authenticateRoutes);

export { router };
