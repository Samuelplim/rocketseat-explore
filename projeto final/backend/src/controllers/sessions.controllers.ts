import { Request, Response } from "express";
import { SessionService } from "../services/sessions.service";
import { UserRepository } from "../repositories/user.repositories";

export class SessionsControllers {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;
    const userRepository = new UserRepository();
    const sessionsService = new SessionService(userRepository);

    const res = await sessionsService.create({ email, password });

    return response.status(201).json(res);
  }
}
