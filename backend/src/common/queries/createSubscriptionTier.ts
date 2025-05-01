import { sql } from "drizzle-orm";
import { db } from "../../db/drizzleSingleton";
import { subscriptionTiers } from "../../db/schema";
import type { SubscriptionTier } from "../types/subscriptionTier";

export const createSubscriptionTier = async (data: SubscriptionTier) => {
  try {
    const result = await db
      .insert(subscriptionTiers)
      .values({
        name: data.name,
        creatorId: data.creatorId,
        price: sql`${data.price}`,
        perks: data.perks,
        description: data.description,
        tier: data.tier,
        duration: data.duration,
      })
      .returning();
    console.log("Create Subscription Tier: ", result);
    return result[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create subscription tier");
  }
};
