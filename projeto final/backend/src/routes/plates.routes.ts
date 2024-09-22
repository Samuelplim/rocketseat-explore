import multer from "multer";
import { Multer } from "../config/upload";
import { Router } from "express";
import { PlateController } from "../controllers/plate.controllers";

export const plateRoutes = Router();
const upload = multer(Multer);
const plateController = new PlateController();

plateRoutes.post("/", plateController.create);
plateRoutes.get("/", plateController.index);
plateRoutes.put("/", plateController.update);
plateRoutes.get("/:id", plateController.findById);
plateRoutes.delete("/:id", plateController.delete);
plateRoutes.patch("/image/:id", upload.single("image"), plateController.patch);
