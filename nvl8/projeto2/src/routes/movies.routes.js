const { Router } = require("express");
const MoviesController = require("../controllers/MoviesController");

const userRoutes = Router();
const moviesController = new MoviesController();

userRoutes.post("/:user_id", moviesController.create);

module.exports = userRoutes;
