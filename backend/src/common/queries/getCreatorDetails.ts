import { eq } from "drizzle-orm";
import { db } from "../../db/drizzleSingleton";
import { creators } from "../../db/schema";

export const getCreatorDetails = async (userId: string) => {
  try {
    return await db.select().from(creators).where(eq(creators.id, userId));
  } catch (error) {
    console.log("❌ERROR: Failed to get creator details: ", error);
    throw new Error("ERROR: Failed to get creator details: " + error);
  }
};
