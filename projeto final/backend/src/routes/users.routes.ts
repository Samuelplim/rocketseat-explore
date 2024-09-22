import { UserController } from "../controllers/user.controllers";
import { Router } from "express";

export const usersRoutes = Router();
const user = new UserController();

usersRoutes.post("/", user.create);
usersRoutes.put("/", user.update);
