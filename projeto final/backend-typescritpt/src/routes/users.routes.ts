import { UserController } from "../controllers/user.controllers";
import { Request, Response, Router } from "express";

export const UsersRoutes = Router();
const user = new UserController();

UsersRoutes.post("/", user.create);
