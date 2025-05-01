import express from "express";
import type { Request, Response } from "express";
import { tokenMiddleware } from "../common/middleware/tokenMiddleware";
import { fanDetails } from "../controllers/fanController";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.send("Fan service is up and running! 🚀");
  return;
});

router.get("/details", tokenMiddleware, fanDetails);

export { router };
