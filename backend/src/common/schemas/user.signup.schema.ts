import zod from "zod";
import { UserType } from "../utils/constants";

export const UserSignUpSchema = zod.object({
  userId: zod.string(),
  username: zod.string(),
  email: zod.string().email(),
  userType: zod.enum([UserType.CREATOR, UserType.FAN]),
});

export type UserSignUp = zod.infer<typeof UserSignUpSchema>;
