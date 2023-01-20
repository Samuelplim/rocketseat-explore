const { Router } = require("express");
const userRoutes = require("./user.routes");
const moviesRoutes = require("./movies.routes");
const movies_tagsRoutes = require("./movies_tags.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", moviesRoutes);
routes.use("/tags", movies_tagsRoutes);

module.exports = routes;
