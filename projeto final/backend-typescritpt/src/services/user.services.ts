import { compare, hash } from "bcryptjs";
import { UserRepositoryInterface } from "../repositories/repository";
import { AppError } from "../utils/AppError";

export class UserService {
  userRepository: UserRepositoryInterface;
  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  async create({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const verifyUserEmailExists = await this.userRepository.findByEmail(email);

    if (verifyUserEmailExists) {
      throw new AppError("Este email já está em uso!");
    }

    const hashedPassword = await hash(password, 8);
    const userId = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return userId;
  }

  async update({
    id,
    name,
    email,
    password,
    new_password,
  }: {
    id: number;
    name: string;
    email: string;
    password: string;
    new_password: string;
  }) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    const userEmail = await this.userRepository.findByEmail(email);

    if (userEmail && userEmail.id !== user.id) {
      throw new AppError("Este email já está em uso.");
    }

    if (!password && new_password) {
      throw new AppError("Informe sua senha para atualizar a senha!");
    }

    const checkOldPassword = await compare(password, user.password);
    if (!checkOldPassword) {
      throw new AppError("Senha incorreta!");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.password = await hash(new_password, 8);

    await this.userRepository.update({
      id,
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return id;
  }
}
