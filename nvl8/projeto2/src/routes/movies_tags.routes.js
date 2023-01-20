const { Router } = require("express");
const MoviesTagsController = require("../controllers/MoviesTagsController");

const userRoutes = Router();
const moviesTagsController = new MoviesTagsController();

userRoutes.get("/:user_id", moviesTagsController.index);

module.exports = userRoutes;
