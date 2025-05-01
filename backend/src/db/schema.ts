import { sql } from "drizzle-orm";
import { integer, numeric, pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const paymentStatusEnum = pgEnum("PaymentStatus", ["COMPLETED", "PENDING"]);

export const creators = pgTable("Creator", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  bio: text("bio"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const fans = pgTable("Fan", {
  id: text("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const subscriptionTiers = pgTable("SubscriptionTier", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  creatorId: text("creatorId")
    .notNull()
    .references(() => creators.id),
  price: numeric("price").notNull(),
  perks: text("perks").array().notNull(),
  description: text("description").notNull(),
  tier: integer("tier").notNull(),
  duration: integer("duration"),
  subscribers: integer("subscribers").default(0),
  monthlyRevenue: numeric("monthlyRevenue").default(sql`0`),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const subscriptions = pgTable("Subscription", {
  id: uuid("id").primaryKey().defaultRandom(),
  fanId: text("fanId")
    .notNull()
    .references(() => fans.id),
  tierId: uuid("tierId")
    .notNull()
    .references(() => subscriptionTiers.id),
  paymentStatus: paymentStatusEnum("paymentStatus").notNull(),
  expiration: timestamp("expiration").notNull(),
  subscriptionDate: timestamp("subscriptionDate").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const paymentInfos = pgTable("PaymentInfo", {
  id: uuid("id").primaryKey().defaultRandom(),
  subscriptionId: uuid("subscriptionId")
    .notNull()
    .references(() => subscriptions.id),
  transactionId: text("transactionId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const payouts = pgTable("Payout", {
  id: uuid("id").primaryKey().defaultRandom(),
  tierId: uuid("tierId")
    .notNull()
    .references(() => subscriptionTiers.id),
  amount: numeric("amount").notNull(),
  payoutStatus: paymentStatusEnum("payoutStatus").notNull(),
  payoutDate: timestamp("payoutDate").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
