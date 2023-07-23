const { Router } = require("express");
const TagController = require("../controllers/TagControllers");

const tagRoutes = Router();

const tagController = new TagController();

tagRoutes.post("/:plate_id", tagController.create);

module.exports = tagRoutes;
