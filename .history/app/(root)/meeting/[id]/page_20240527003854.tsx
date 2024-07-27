"use client";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  return (
    <main>
      <StreamCall>
        <StreamTheme></StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
