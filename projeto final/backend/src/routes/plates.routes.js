const { Router } = require("express");
const multer = require("multer");

const uploadConfig = require("../configs/upload");
const PlateControllers = require("../controllers/PlateControllers");

const plateRoutes = Router();
const plateController = new PlateControllers();

const upload = multer(uploadConfig.MULTER);

plateRoutes.post("/", plateController.create);
plateRoutes.get("/", plateController.index);
plateRoutes.put("/", plateController.update);
plateRoutes.get("/:id", plateController.findById);
plateRoutes.delete("/:id", plateController.delete);
plateRoutes.patch("/image/:id", upload.single("image"), plateController.patch);

module.exports = plateRoutes;
