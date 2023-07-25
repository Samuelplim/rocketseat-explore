const { Router } = require("express");

const usersRoutes = require("./users.routes");
const companiesRoutes = require("./companies.routes");
const platesRoutes = require("./plates.routes");
const sessionsRoutes = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/companies", companiesRoutes);
routes.use("/plates", platesRoutes);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;
