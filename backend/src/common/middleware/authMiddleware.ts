import type { NextFunction, Request, Response } from "express";
import { UserSignUpSchema } from "../schemas/user.signup.schema";
import { HTTP_STATUS } from "../utils/constants";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { success } = UserSignUpSchema.safeParse(req.body);
  if (!success) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Invalid request body",
    });
    return;
  }
  next();
};
