import { connection, NextResponse } from "next/server";

export const POST = async (req: Request) => {
const {fullname,nid, email, password} = await req.json();
    console.log(fullname,nid, email, password);

    // create a db connection

    // encrypt the password

    // form a db payload 

    // update the DB 

    return new NextResponse("User has been created", {status: 201})
}