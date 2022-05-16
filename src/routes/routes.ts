import { Router } from "express";

const routes = Router();

import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";

routes.post("/users", createUserController);
routes.get("/users", listUsersController);

export default routes;
