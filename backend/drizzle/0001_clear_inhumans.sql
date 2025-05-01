ALTER TABLE "SubscriptionTier" ALTER COLUMN "duration" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "SubscriptionTier" ALTER COLUMN "subscribers" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "SubscriptionTier" ALTER COLUMN "subscribers" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "SubscriptionTier" ALTER COLUMN "monthlyRevenue" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "SubscriptionTier" ALTER COLUMN "monthlyRevenue" DROP NOT NULL;