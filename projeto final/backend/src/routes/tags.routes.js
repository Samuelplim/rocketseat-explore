const { Router } = require("express");
const TagController = require("../controllers/TagControllers");

const tagsRoutes = Router();

const tagController = new TagController();

tagsRoutes.post("/:plate_id", tagController.create);

module.exports = tagsRoutes;
