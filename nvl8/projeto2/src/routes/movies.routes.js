const { Router } = require("express");
const MoviesController = require("../controllers/MoviesController");

const userRoutes = Router();
const moviesController = new MoviesController();

userRoutes.post("/:user_id", moviesController.create);
userRoutes.get("/:id", moviesController.show);
userRoutes.delete("/:id", moviesController.delete);

module.exports = userRoutes;
