const AppError = require("../utils/AppError");

class UsersController {
  create(request, response) {
    const { name, email, password, avatar } = request.body;
    if (!name) {
      throw new AppError("O nome é obrigadorio!");
    }
    response.status(201).json({ name, email, password, avatar });
  }
}
module.exports = UsersController;
