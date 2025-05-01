import type { Response } from "express";
import type { AuthRequest } from "../common/types/userAuthRequest";
import { HTTP_STATUS } from "../common/utils/constants";
import { HttpStatusMessages } from "../common/utils/constants";
import type { SubscriptionTier } from "../common/types/subscriptionTier";
import { SubscriptionTierCreationSchema } from "../common/schemas/subscriptionTier.create.schema";
import { SubscriptionTierUpdateSchema } from "../common/schemas/subscriptionTier.update.schema";
import {
  createSubscriptionTierHandler,
  deleteSubscriptionTierHandler,
  getSubscriptionTiersHandler,
  updateSubscriptionTierHandler,
} from "../handlers/subscriptionTierHandler";

const createSubscrioptionTierController = async (req: AuthRequest, res: Response): Promise<void> => {
  if (!req.userId) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      message: HttpStatusMessages.UNAUTHORIZED,
    });
    return;
  }
  const { success } = SubscriptionTierCreationSchema.safeParse(req.body);
  if (!success) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Invalid request body",
    });
    return;
  }
  try {
    const data: SubscriptionTier = req.body;
    const subscriptionTier = await createSubscriptionTierHandler(data);
    res.status(HTTP_STATUS.CREATED).json({
      message: "Subscription tier created successfully",
      data: subscriptionTier,
    });
    return;
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Failed to create subscription tier",
      error: error,
    });
    return;
  }
};

const getSubscriptionTierByCreatorIdController = async (req: AuthRequest, res: Response): Promise<void> => {
  if (!req.userId) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      message: HttpStatusMessages.UNAUTHORIZED,
    });
    return;
  }
  try {
    const subscriptionTiers = await getSubscriptionTiersHandler(req.userId);
    res.status(HTTP_STATUS.OK).json({
      message: HttpStatusMessages.OK,
      subscriptionTiers: subscriptionTiers,
    });
    return;
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: HttpStatusMessages.INTERNAL_SERVER_ERROR,
      error: error,
    });
    return;
  }
};

const updateSubscriptionTierController = async (req: AuthRequest, res: Response): Promise<void> => {
  if (!req.userId) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      message: HttpStatusMessages.UNAUTHORIZED,
    });
    return;
  }
  const { success } = SubscriptionTierUpdateSchema.safeParse(req.body);
  if (!success) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Invalid request body",
    });
    return;
  }
  try {
    const subscriptionTier = await updateSubscriptionTierHandler(req.body);
    res.status(HTTP_STATUS.OK).json({
      message: "Subscription tier updated successfully",
      data: subscriptionTier,
    });
    return;
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Failed to update subscription tier",
      error: error,
    });
    return;
  }
};

const deleteSubscriptionTierController = async (req: AuthRequest, res: Response): Promise<void> => {
  if (!req.userId) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json({
      message: HttpStatusMessages.UNAUTHORIZED,
    });
    return;
  }
  try {
    const response = await deleteSubscriptionTierHandler(req.body);
    res.status(HTTP_STATUS.OK).json({
      message: "Subscription tier deleted successfully",
      response: response,
    });
    return;
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Failed to delete subscription tier",
      error: error,
    });
    return;
  }
};

export {
  createSubscrioptionTierController,
  deleteSubscriptionTierController,
  getSubscriptionTierByCreatorIdController,
  updateSubscriptionTierController,
};
