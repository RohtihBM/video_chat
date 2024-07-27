"use client";
import MeetingSetup from "@/components/MeetingSetup";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  return (
    <main className="h-screen w-full">
      <StreamCall>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup /> : <MeetingSetup />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
