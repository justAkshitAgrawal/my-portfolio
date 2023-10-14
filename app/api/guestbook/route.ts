import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { guestSignShema } from "@/lib/validator";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, name } = guestSignShema.parse(body);

    const session = getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        {
          message: "Please sign in before posting",
        },
        {
          status: 401,
        }
      );
    }

    const newMessage = await prisma.guestbook.create({
      data: {
        name,
        message,
      },
    });

    return NextResponse.json(
      {
        message: "OK",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: true,
        message: "Please check your submission",
      },
      {
        status: 400,
      }
    );
  }
}
