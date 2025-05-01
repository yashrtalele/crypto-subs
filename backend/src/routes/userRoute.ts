import express from "express";
import type { Request, Response, Router } from "express";
import { signUp } from "../controllers/authController";
import { authMiddleware } from "../common/middleware/authMiddleware";
const router: Router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.send("Auth service is up and running! 🚀");
  return;
});

router.post("/sign-up", authMiddleware, signUp);

export { router };
