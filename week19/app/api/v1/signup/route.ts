import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import prismaClient from "../../../lib/db";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const user = await prismaClient.user.create({
    data: {
      username: data.username,
      password: data.password,
    },
  });

  console.log("User created:", user);

  return NextResponse.json({
    message: "Signup successful",
  });
}
