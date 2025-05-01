import { eq } from "drizzle-orm";
import { db } from "../../db/drizzleSingleton";
import { subscriptionTiers } from "../../db/schema";
import { UpdateSubscriptionTier } from "../types/subscriptionTier";

export const updateSubscriptionTier = async (data: UpdateSubscriptionTier) => {
  try {
    const subscriptionTier = await db.select().from(subscriptionTiers).where(eq(subscriptionTiers.id, data.id));
    if (!subscriptionTier) {
      throw new Error("Subscription tier not found");
    }
    if (data.perks) {
      subscriptionTier[0].perks = data.perks;
    }
    if (data.description) {
      subscriptionTier[0].description = data.description;
    }
    if (data.price) {
      subscriptionTier[0].price = data.price.toString();
    }
    if (data.duration) {
      subscriptionTier[0].duration = data.duration;
    }
    if (data.tier) {
      subscriptionTier[0].tier = data.tier;
    }
    await db.update(subscriptionTiers).set(subscriptionTier[0]).where(eq(subscriptionTiers.id, data.id));
    return { message: "Subscription tier updated successfully" };
  } catch (error) {
    console.log("❌ERROR: Failed to update subscription tier: ", error);
    throw new Error("ERROR: Failed to update subscription tier: " + error);
  }
};
