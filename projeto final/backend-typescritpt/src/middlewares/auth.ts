import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { verify } from "jsonwebtoken";
import { jwtConfig } from "../config/auth";

export function Auth(request: any, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT não informado", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, jwtConfig.jwt.secret);

    request.user = {
      id: user_id,
    };

    return next();
  } catch {
    throw new AppError("jwt inválido", 401);
  }
}
