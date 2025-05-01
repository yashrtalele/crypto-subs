import { eq } from "drizzle-orm";
import { db } from "../../db/drizzleSingleton";
import { subscriptionTiers } from "../../db/schema";

export const getSubscriptionTiersByCreatorId = async (creatorId: string) => {
  try {
    return await db.select().from(subscriptionTiers).where(eq(subscriptionTiers.creatorId, creatorId));
  } catch (error) {
    console.log("❌ERROR: Failed to get subscription tiers: ", error);
    throw new Error("ERROR: Failed to get subscription tiers: " + error);
  }
};
