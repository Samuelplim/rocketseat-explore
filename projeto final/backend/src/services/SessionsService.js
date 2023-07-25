const { hash, compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const AppError = require("../utils/AppError");
const { sign } = require("jsonwebtoken");

class SessionsService {
  constructor(SessionsRepository) {
    this.userRepository = SessionsRepository;
  }

  async create({ email, password }) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const passwordVerification = await compare(password, user.password);

    if (!passwordVerification) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return { user, token };
  }
}

module.exports = SessionsService;
