const { Router } = require("express");
const MoviesController = require("../controllers/MoviesController");

const userRoutes = Router();
const moviesController = new MoviesController();

userRoutes.get("/", moviesController.index);
userRoutes.get("/:id", moviesController.show);
userRoutes.post("/:user_id", moviesController.create);
userRoutes.delete("/:id", moviesController.delete);

module.exports = userRoutes;
