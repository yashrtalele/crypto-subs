import express from "express";
import type { Request, Response } from "express";
import { tokenMiddleware } from "../common/middleware/tokenMiddleware";
import {
  createSubscrioptionTierController,
  deleteSubscriptionTierController,
  getSubscriptionTierByCreatorIdController,
  updateSubscriptionTierController,
} from "../controllers/subscriptionTierController";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.send("Subscription Tier service is up and running! 🚀");
  return;
});

router.post("/create", tokenMiddleware, createSubscrioptionTierController);

router.get("/get-all-tiers", tokenMiddleware, getSubscriptionTierByCreatorIdController);

router.put("/update", tokenMiddleware, updateSubscriptionTierController);

router.delete("/delete", tokenMiddleware, deleteSubscriptionTierController);

export { router };
