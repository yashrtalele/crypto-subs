export interface SubscriptionTier {
  name: string;
  creatorId: string;
  price: number;
  perks: string[];
  duration: number;
  description: string;
  subscribers?: number;
  monthlyRevenue?: number;
  tier: number;
}

export interface UpdateSubscriptionTier {
  id: string;
  perks?: string[];
  description?: string;
  price?: number;
  duration?: number;
  tier?: number;
}
