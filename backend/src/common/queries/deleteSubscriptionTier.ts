import { eq } from "drizzle-orm";
import { db } from "../../db/drizzleSingleton";
import { subscriptionTiers } from "../../db/schema";

interface DeleteSubscriptionTier {
  id: string;
}

export const deleteSubscriptionTier = async (data: DeleteSubscriptionTier) => {
  try {
    const subscriptionTier = await db.select().from(subscriptionTiers).where(eq(subscriptionTiers.id, data.id));
    if (subscriptionTier.length === 0) {
      throw new Error("Subscription tier not found");
    }

    await db.delete(subscriptionTiers).where(eq(subscriptionTiers.id, data.id));

    return { message: "Subscription tier deleted successfully" };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete subscription tier");
  }
};
