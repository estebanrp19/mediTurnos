import { Router } from "express";
const usersRouter : Router = Router();

import { getAllUsers } from "../controllers/usersControllers";
import { getUserById } from "../controllers/usersControllers";
import { registerUser } from "../controllers/usersControllers";
import { loginUser } from "../controllers/usersControllers";

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

module.exports = usersRouter;