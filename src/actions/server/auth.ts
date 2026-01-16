"use server";
import { SignupFormData } from "@/src/types/auth/SignupFormData";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/src/auth";
import { User } from "@/src/model/user-model";
import { collections, dbConnect } from "@/src/lib/dbConnect";
import { LoginFormData } from "@/src/types/auth/LoginFormData";

// method 1
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

  // 3. send user to the database
  const result = await dbConnect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      message: `user created successfully`,
    };
  }
};

export const loginUser = async (payload: LoginFormData) => {
  const { email, password } = payload;

  const user = await dbConnect(collections.USERS).findOne({ email });

  if (!user) {
    return null;
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (isMatched) {
    return {
      id: user._id.toString(),
      email: user.email,
      name: user.fullname,
      image: user.image,
      role: user.role,
      createdAt: user.createdAt,
    };
  } else {
    return null;
  }
};

export const createUser = async (userData: SignupFormData) => {
  try {
    await User.create(userData);
  } catch  {
    throw new Error("Failed to create user");
  }
};

export const socialLogin = async (payload: string) => {
  await signIn(payload, { redirectTo: "/" });
};

export const logoutUser = async () => {
  await signOut({ redirect: false });
};
