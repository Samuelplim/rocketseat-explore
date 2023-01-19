const { Router } = require("express");

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  const { name } = request.body;
  response.json({ name });
});

userRoutes.get("/", (req, res) => {
  res.send("Path Users");
});

module.exports = userRoutes;
