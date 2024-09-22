import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { tagsRoutes } from "./tag.routes";
import { merchantRoutes } from "./merchant.routes";
import { plateRoutes } from "./plates.routes";
import { sessionsRoutes } from "./sessions.routes";

export const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/tags", tagsRoutes);
routes.use("/merchants", merchantRoutes);
routes.use("/plates", plateRoutes);
routes.use("/sessions", sessionsRoutes);
