import { Response, Request } from "express";
import { UserRepository } from "../repositories/user.repositories";
import { UserService } from "../services/user.services";

export class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);
    try {
      const userID = await userService.create({
        name,
        email,
        password,
      });

      return res.status(201).json(userID);
    } catch (error: any) {
      return res.status(error.statusCode).json(error.message);
    }
  }
}
