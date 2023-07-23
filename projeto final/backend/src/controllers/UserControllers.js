const knex = require("../database/knex");
const UserRepository = require("../repositories/UserRepository");
const UserService = require("../services/UserService");

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    const userID = await userService.create({
      name,
      email,
      password,
    });

    return response.status(201).json();
  }
}

module.exports = UserController;
