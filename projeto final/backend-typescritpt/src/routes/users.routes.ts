import { UserController } from "../controllers/user.controllers";
import { Router } from "express";

export const UsersRoutes = Router();
const user = new UserController();

UsersRoutes.post("/", user.create);
UsersRoutes.put("/", user.update);
