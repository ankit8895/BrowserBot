import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const migrationUrl =
  process.env.DATABSE_URL_UNPOOLING ?? process.env.DATABASE_URL;

if (!migrationUrl) throw new Error("DATABASE_URL is not set in the .env file");

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: migrationUrl,
  },
  casing: "snake_case",
  verbose: true,
  strict: true,
});
