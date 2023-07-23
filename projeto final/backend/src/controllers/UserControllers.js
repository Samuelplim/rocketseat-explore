const UserRepository = require("../repositories/UserRepository");
const UserService = require("../services/UserService");

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    try {
      const userID = await userService.create({
        name,
        email,
        password,
      });

      return response.status(201).json(userID);
    } catch (error) {
      return response.status(error.statusCode).json(error.message);
    }
  }
  async update(request, response) {
    const { name, email, password, new_password } = request.body;
    const { id } = request.params;
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    try {
      const user = await userService.update({
        id,
        name,
        email,
        password,
        new_password,
      });

      return response
        .status(200)
        .json({ message: "Usuario atualizado ", user });
    } catch (error) {
      return response.status(error.statusCode).json(error.message);
    }
  }
}

module.exports = UserController;
