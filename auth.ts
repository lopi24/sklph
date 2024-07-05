import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import User from "@/models/user.model";
import { connectToDB } from "@/lib/database/index";
import authConfig from "@/auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  // providers: [
  // Google({
  //   clientId: process.env.GOOGLE_CLIENT_ID as string,
  //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  // }),
  // ],
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
  ...authConfig,
});
