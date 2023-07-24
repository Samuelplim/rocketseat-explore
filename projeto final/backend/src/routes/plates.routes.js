const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const PlateController = require("../controllers/PlateControllers");

const plateRoutes = Router();

const plateController = new PlateController();

const upload = multer(uploadConfig.MULTER);

plateRoutes.post("/:companies_id", plateController.create);
plateRoutes.patch("/image", plateController.patch);

module.exports = plateRoutes;
