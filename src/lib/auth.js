import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);

// ⚠️ connect properly
await client.connect();

const db = client.db("doctor");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      enabled: true,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60,
    },
  },

  plugins: [jwt()],

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },
});