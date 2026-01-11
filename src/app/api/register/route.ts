// i use server actions for authentication ???

// import { connectToDB } from "@/src/lib/mongo";
// import { NextResponse } from "next/server";
// import { createUser } from "@/src/actions/server/auth";
// import bcrypt from "bcryptjs";
// export const POST = async (req: Request) => {
//   const { fullname, nid, email, password } = await req.json();
//   console.log(fullname, nid, email, password);

//   // create a db connection
//   await connectToDB();
//   // encrypt the password
//   const hashedPassword = await bcrypt.hash(password, 10);
//   // form a db payload
//   const userData = {
//     fullname,
//     nid,
//     email,
//     password: hashedPassword,
//   };
//   // update the DB
//   try {
//     await createUser(userData);
//   } catch (e) {
//     return new NextResponse("Failed to create user", { status: 500 });
//   }
// };
