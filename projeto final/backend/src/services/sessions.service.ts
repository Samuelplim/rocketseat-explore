import { compare } from "bcryptjs";
import { UserRepositoryInterface } from "../repositories/repository";
import { AppError } from "../utils/AppError";
import { sign } from "jsonwebtoken";
import { jwtConfig } from "../config/auth";

export class SessionService {
  userRepository: UserRepositoryInterface;
  constructor(SessionsRepository: UserRepositoryInterface) {
    this.userRepository = SessionsRepository;
  }

  async create({ email, password }: { email: string; password: string }) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const passwordVerification = await compare(password, user.password);

    if (!passwordVerification) {
      throw new AppError("E-mail e/ou senha incorrecto(a)", 401);
    }

    const { secret, expiresIn } = jwtConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return { user, token };
  }
}
