import { createSubscriptionTier } from "../common/queries/createSubscriptionTier";
import { deleteSubscriptionTier } from "../common/queries/deleteSubscriptionTier";
import { getSubscriptionTiersByCreatorId } from "../common/queries/getSubscriptionTiers";
import { updateSubscriptionTier } from "../common/queries/updateSubscriptionTier";
import type { SubscriptionTier, UpdateSubscriptionTier } from "../common/types/subscriptionTier";

export const createSubscriptionTierHandler = async (data: SubscriptionTier) => {
  return await createSubscriptionTier(data);
};

export const getSubscriptionTiersHandler = async (creatorId: string) => {
  return await getSubscriptionTiersByCreatorId(creatorId);
};

export const updateSubscriptionTierHandler = async (data: UpdateSubscriptionTier) => {
  return await updateSubscriptionTier(data);
};

export const deleteSubscriptionTierHandler = async (id: string) => {
  return await deleteSubscriptionTier({ id });
};
