import type { Request, Response } from "express";
import { signUpHandler } from "../handlers/authHandler";
import { HTTP_STATUS } from "../common/utils/constants";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    await signUpHandler(req.body);
    res.status(HTTP_STATUS.CREATED).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Failed to create user",
      error,
    });
  }
};
