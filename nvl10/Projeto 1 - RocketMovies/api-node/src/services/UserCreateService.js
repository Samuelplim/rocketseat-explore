const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const verifyUserEmailExists = await this.userRepository.findByEmail(email);

    if (verifyUserEmailExists) {
      throw new AppError("Este email está a ser utilizado");
    }

    const hashedPassword = await hash(password, 8);

    const userId = await this.userRepository.create({
      name,
      email,
      hashedPassword,
    });
    return userId;
  }
}

module.exports = UserCreateService;
