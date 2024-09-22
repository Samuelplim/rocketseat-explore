import { Router } from "express";
import { SessionsControllers } from "../controllers/sessions.controllers";

export const sessionsRoutes = Router();

const sessionsControllers = new SessionsControllers();
sessionsRoutes.post("/", sessionsControllers.create);
