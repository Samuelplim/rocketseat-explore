const { Router } = require("express");
const SessionsControllers = require("../controllers/SessionsControllers");

const sessionsRoutes = Router();

const sessionsControllers = new SessionsControllers();

sessionsRoutes.post("/", sessionsControllers.create);

module.exports = sessionsRoutes;
