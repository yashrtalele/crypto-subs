import { drizzle } from "drizzle-orm/postgres-js";
import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}

const queryClient = postgres(process.env.DATABASE_URL, {
  max: 1,
});

export const db = drizzle(queryClient);
