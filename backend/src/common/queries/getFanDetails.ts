import { eq } from "drizzle-orm";
import { db } from "../../db/drizzleSingleton";
import { fans } from "../../db/schema";

export const getFanDetails = async (userId: string) => {
  try {
    return await db.select().from(fans).where(eq(fans.id, userId));
  } catch (error) {
    console.log("❌ERROR: Failed to get fan details: ", error);
    throw new Error("ERROR: Failed to get fan details: " + error);
  }
};
