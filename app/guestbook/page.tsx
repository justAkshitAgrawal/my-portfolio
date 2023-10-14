import GithubSignIn from "@/components/GithubSignIn";
import GuestSign from "@/components/GuestSign";
import GuestbookMessage from "@/components/GuestbookMessage";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import React from "react";

export const metadata: Metadata = {
  title: "Guestbook | Akshit Agrawal",
  description: "Software Engineer | Full Stack Developer",
};

const GuestbookPage = async () => {
  const session = await getServerSession(authOptions);

  const messages = await prisma.guestbook.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mt-5 px-6 md:px-0 pb-10 md:max-w-2xl w-full">
      <h1 className="mt-14 font-semibold text-2xl">{`sign here`}</h1>

      <div className="mt-8">
        {session?.user ? <GuestSign user={session.user} /> : <GithubSignIn />}
      </div>

      <div className="mt-8 flex flex-col md:gap-3 gap-2">
        {messages?.map((message) => {
          return <GuestbookMessage message={message} key={message.id} />;
        })}
      </div>
    </div>
  );
};

export default GuestbookPage;
