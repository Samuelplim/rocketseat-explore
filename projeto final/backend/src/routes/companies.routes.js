const { Router } = require("express");
const CompanyControllers = require("../controllers/CompanyControllers");

const companyRoutes = Router();

const companyController = new CompanyControllers();

companyRoutes.post("/:user_id", companyController.create);

module.exports = companyRoutes;
