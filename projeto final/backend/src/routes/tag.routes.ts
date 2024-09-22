import { Router } from "express";
import { TagController } from "../controllers/tag.controllers";

export const tagsRoutes = Router();
const tagController = new TagController();

tagsRoutes.post("/:plate_id", tagController.create);
