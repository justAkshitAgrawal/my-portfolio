"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

interface GuestSignProps {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

const GuestSign = ({ user }: GuestSignProps) => {
  const [message, setMessage] = useState<string>("");

  const router = useRouter();

  const { mutate: sign, isLoading } = useMutation({
    mutationFn: async ({
      message,
      name,
    }: {
      message: string;
      name: string;
    }) => {
      const payload = {
        message,
        name,
      };
      const { data } = await axios.post("/api/guestbook", payload);
      return data;
    },
    onSuccess: () => {
      setMessage("");
      router.refresh();
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  return (
    <>
      <div className=" bg-[#262626] w-full max-w-lg flex justify-between py-1 rounded-md text-sm px-1">
        <input
          placeholder="Your message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          min={1}
          max={100}
          type="text"
          className=" bg-transparent px-2 py-1.5 outline-none w-full"
        />
        <button
          onClick={() => {
            sign({
              message,
              name: user.name!,
            });
          }}
          disabled={isLoading || message.length < 1}
          className="bg-[#404040] px-4  rounded-md py-1 disabled:opacity-50"
        >
          {isLoading ? (
            <div>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            </div>
          ) : (
            <p>Sign</p>
          )}
        </button>
      </div>
      <button
        onClick={() => {
          signOut();
        }}
        className=" text-xs mt-2"
      >
        Sign Out
      </button>
    </>
  );
};

export default GuestSign;
