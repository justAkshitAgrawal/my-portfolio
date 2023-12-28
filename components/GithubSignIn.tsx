"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { SpotlightButton } from "./SpotlightButton";

const GithubSignIn = () => {
  return (
    <button
      onClick={() => {
        signIn("github", {
          redirect: false,
        });
      }}
    >
      <SpotlightButton className="cursor-pointer">
        <span className="relative mt-px flex space-x-4 items-center bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona md:text-lg font-medium text-transparent transition-all duration-200">
          <VscGithub className="h-6 w-6 z-50 text-white" />
          <span>Sign in with Github</span>
        </span>
      </SpotlightButton>
    </button>
  );
};

export default GithubSignIn;
