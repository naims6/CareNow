"use server";
import bcrypt from "bcryptjs";
import { collections, dbConnect } from "@/src/lib/dbConnect";
import { SignupFormData } from "@/src/types/auth/SignupFormData";
import { LoginFormData } from "@/src/types/auth/LoginFormData";
import { signIn, signOut } from "@/src/auth";

export const postUser = async (payload: SignupFormData) => {
  const { email, password } = payload;
  // check user exist or not
  const isExist = await dbConnect("users").findOne({ email });
  if (isExist) {
    return {
      success: false,
      message: "user already axisted",
    };
  }

  const hashPassword = await bcrypt.hash(password, 10);
  // 2. create new user
  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashPassword,
  };
  console.log(newUser);

  // 3. send user to the database
  const result = await dbConnect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      message: `user created with ${result.insertedId}`,
    };
  }
};

export const loginUser = async (payload: LoginFormData) => {
  const { email, password } = payload;

  if (!email || !password) {
    return { error: "Missing email or password" };
  }

  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) {
    return { error: "User is not exist" };
  }
  const isMatched = await bcrypt.compare(password, user.password);

  if (isMatched) {
    return user;
  } else {
    return { error: "Wrong credential" };
  }
};

export const socialLogin = async (payload: string) => {
  await signIn(payload, { redirectTo: "/" });
};

export const logoutUser = async () => {
  console.log("logouting...")
  await signOut({ redirectTo: "/login" });
};