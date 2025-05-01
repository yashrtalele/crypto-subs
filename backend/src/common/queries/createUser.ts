import { db } from "../../db/drizzleSingleton";
import type { User } from "../types/user";
import { creators, fans } from "../../db/schema";
import { UserType } from "../utils/constants";

export const createUser = async (user: User): Promise<void> => {
  try {
    if (user.userType === UserType.CREATOR) {
      await db.insert(creators).values({
        id: user.userId,
        username: user.username,
        email: user.email,
        bio: user.bio ?? null,
      });
    } else {
      await db.insert(fans).values({
        id: user.userId,
        username: user.username,
        email: user.email,
      });
    }
  } catch (error) {
    console.log("❌ Error creating user: ", error);
    throw new Error("Error creating user" + error);
  }
};
