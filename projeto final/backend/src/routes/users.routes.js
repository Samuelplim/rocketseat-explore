const { Router } = require("express");
const UsersController = require("../controllers/UserControllers");

const usersRoutes = Router();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;
