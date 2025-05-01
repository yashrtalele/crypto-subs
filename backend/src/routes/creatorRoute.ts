import express from "express";
import type { Request, Response } from "express";
import { tokenMiddleware } from "../common/middleware/tokenMiddleware";
import { creatorDetails } from "../controllers/creatorController";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.send("Creator service is up and running! 🚀");
  return;
});

router.get("/details", tokenMiddleware, creatorDetails);

export { router };
