import { Router } from "express";
import { UsersRoutes } from "./users.routes";
import { tagsRoutes } from "./tag.routes";

export const routes = Router();
routes.use("/users", UsersRoutes);
routes.use("/tags", tagsRoutes);
