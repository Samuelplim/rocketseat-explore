import { Router } from "express";
import { UsersRoutes } from "./users.routes";

export const routes = Router();
routes.use("/users", UsersRoutes);
