const AppError = require("../utils/AppError");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    return response.status(201).json();
  }
}

module.exports = UsersController;
