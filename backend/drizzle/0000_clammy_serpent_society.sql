CREATE TYPE "public"."PaymentStatus" AS ENUM('COMPLETED', 'PENDING');--> statement-breakpoint
CREATE TABLE "Creator" (
	"id" text PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"bio" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Creator_username_unique" UNIQUE("username"),
	CONSTRAINT "Creator_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "Fan" (
	"id" text PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Fan_username_unique" UNIQUE("username"),
	CONSTRAINT "Fan_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "PaymentInfo" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"subscriptionId" uuid NOT NULL,
	"transactionId" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Payout" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tierId" uuid NOT NULL,
	"amount" numeric NOT NULL,
	"payoutStatus" "PaymentStatus" NOT NULL,
	"payoutDate" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "SubscriptionTier" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"creatorId" text NOT NULL,
	"price" numeric NOT NULL,
	"perks" text[] NOT NULL,
	"description" text NOT NULL,
	"tier" integer NOT NULL,
	"duration" integer NOT NULL,
	"subscribers" integer NOT NULL,
	"monthlyRevenue" numeric NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Subscription" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fanId" text NOT NULL,
	"tierId" uuid NOT NULL,
	"paymentStatus" "PaymentStatus" NOT NULL,
	"expiration" timestamp NOT NULL,
	"subscriptionDate" timestamp DEFAULT now() NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "PaymentInfo" ADD CONSTRAINT "PaymentInfo_subscriptionId_Subscription_id_fk" FOREIGN KEY ("subscriptionId") REFERENCES "public"."Subscription"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_tierId_SubscriptionTier_id_fk" FOREIGN KEY ("tierId") REFERENCES "public"."SubscriptionTier"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "SubscriptionTier" ADD CONSTRAINT "SubscriptionTier_creatorId_Creator_id_fk" FOREIGN KEY ("creatorId") REFERENCES "public"."Creator"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_fanId_Fan_id_fk" FOREIGN KEY ("fanId") REFERENCES "public"."Fan"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_tierId_SubscriptionTier_id_fk" FOREIGN KEY ("tierId") REFERENCES "public"."SubscriptionTier"("id") ON DELETE no action ON UPDATE no action;