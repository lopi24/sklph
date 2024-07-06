import NextAuth from "next-auth";

import authConfig from "./auth.config";
// import User from "./lib/database/models/user.model";
// import { connectToDB } from "./lib/database";
import GoogleProvider from "next-auth/providers/google";
import User from "./lib/database/models/user.model";
import { connectToDB } from "./lib/database";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User?.findOne({ email: session?.user?.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        // check if user already exists
        const userExists = await User?.findOne({ email: profile?.email });
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User?.create({
            email: profile?.email,
            username: profile?.name?.replace(/\s/g, "").toLowerCase(),
            image: profile?.picture,
          });
        }
        return true;
      } catch (error) {
        console.error("Error checking/creating user: ", error);
        return false;
      }
    },
  },
});
