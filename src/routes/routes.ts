import { Router } from "express";

const routes = Router();

import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import showUserController from "../controllers/users/showUser.controller";
import updateUserController from "../controllers/users/updateUSer.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";

routes.post("/users", createUserController);
routes.get("/users", listUsersController);
routes.get("/users/:id", showUserController);
routes.patch("/users/:id", updateUserController);
routes.delete("/users/:id", deleteUserController);

export default routes;
