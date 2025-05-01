import zod from "zod";

export const SubscriptionTierCreationSchema = zod.object({
  creatorId: zod.string(),
  name: zod.string(),
  price: zod.number(),
  perks: zod.array(zod.string()),
  duration: zod.number(),
  description: zod.string(),
  tier: zod.number(),
});

export type SubscriptionTierCreation = zod.infer<typeof SubscriptionTierCreationSchema>;
