const AppError = require("../utils/AppError");

class CompanyService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create({ name, user_id }) {
    const userId = await this.userRepository.create({
      name,
      user_id,
    });
    return userId;
  }
}

module.exports = CompanyService;
