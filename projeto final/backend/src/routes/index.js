const { Router } = require("express");

const usersRoutes = require("./users.routes");
const companyRoutes = require("./company.routes");
const platesRoutes = require("./plates.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/companies", companyRoutes);
routes.use("/plates", platesRoutes);

module.exports = routes;
