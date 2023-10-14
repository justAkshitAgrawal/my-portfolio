"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { VscGithub } from "react-icons/vsc";

const GithubSignIn = () => {
  return (
    <button
      onClick={() => {
        signIn("github", {
          redirect: false,
        });
      }}
      className="px-4 py-2 bg-[#262626] w-fit flex border-[1px] gap-2 border-zinc-600 rounded text-sm items-center"
    >
      <VscGithub className="h-6 w-6" />
      <p>Sign in with Github</p>
    </button>
  );
};

export default GithubSignIn;
