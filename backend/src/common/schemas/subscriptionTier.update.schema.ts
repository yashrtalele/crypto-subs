import zod from "zod";

export const SubscriptionTierUpdateSchema = zod.object({
  id: zod.string(),
});

export type SubscriptionTierUpdate = zod.infer<typeof SubscriptionTierUpdateSchema>;
