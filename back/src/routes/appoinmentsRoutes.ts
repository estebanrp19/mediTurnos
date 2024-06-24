import { Router } from "express";
const appoinmentsRouter: Router = Router();

import { getAllAppoinments } from "../controllers/appoinmentsControllers";
import { getAppoinmentById } from "../controllers/appoinmentsControllers";
import { scheduleAppoinment } from "../controllers/appoinmentsControllers";
import { cancelAppoinment } from "../controllers/appoinmentsControllers";

appoinmentsRouter.get("/", getAllAppoinments);
appoinmentsRouter.get("/:id", getAppoinmentById);
appoinmentsRouter.post("/schedule", scheduleAppoinment);
appoinmentsRouter.put("/:id/cancel", cancelAppoinment);

module.exports = appoinmentsRouter;
