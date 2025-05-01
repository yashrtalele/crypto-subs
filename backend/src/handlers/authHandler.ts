import type { User } from "../common/types/user";
import { createUser } from "../common/queries/createUser";

export const signUpHandler = async (user: User): Promise<void> => {
  await createUser(user);
};
