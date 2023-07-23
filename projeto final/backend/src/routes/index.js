const { Router } = require("express");

const usersRoutes = require("./users.routes");
const companyRoutes = require("./company.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/companies", companyRoutes);

module.exports = routes;
