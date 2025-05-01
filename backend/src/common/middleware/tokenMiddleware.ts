import type { NextFunction, Response } from "express";
import { HTTP_STATUS } from "../utils/constants";
import type { AuthRequest } from "../types/userAuthRequest";
// import { verifyToken } from "@clerk/backend";

export const tokenMiddleware = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  // const authHeader = req.headers.authorization;
  // if (!authHeader) {
  //   res.status(HTTP_STATUS.UNAUTHORIZED).json({
  //     message: "Unauthorized",
  //   });
  //   return;
  // }
  // const token = authHeader.split(" ")[1];
  // if (!token) {
  //   res.status(HTTP_STATUS.UNAUTHORIZED).json({
  //     message: "Invalid token format. Token is required",
  //   });
  //   return;
  // }
  try {
    // const response = await verifyToken(token, {
    //   jwtKey: process.env.CLERK_JWT_KEY,
    // authorizedParties: ['http://localhost:3001', 'api.example.com'],
    // });
    // req.body.userId = response.userId;
    req.userId = "test-id";
    next();
  } catch (error) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      message: "Unauthorized",
      error: error,
    });
    return;
  }
};
