import { UsersImplementation } from "@modules/users/implementations/UsersImplementation";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

interface IAuthenticaded {
  sub: string;
}

export async function ensureAuthenticaded(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "3e06fa3927cbdf4e9d93ba4541acce86"
    ) as IAuthenticaded;

    const usersImplementation = new UsersImplementation();

    const user = await usersImplementation.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
