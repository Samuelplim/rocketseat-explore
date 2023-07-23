const { Router } = require("express");
const PlateController = require("../controllers/PlateControllers");

const plateRoutes = Router();

const plateController = new PlateController();

plateRoutes.post("/:companies_id", plateController.create);

module.exports = plateRoutes;
