"use client";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/Hooks/useGetCallById";
// useGetCallById is imported from @/Hooks/useGetCallById.
// It's a custom hook that fetches data related to a call identified by id.
import { useUser } from "@clerk/nextjs";
// useUser from @clerk/nextjs is used to manage user authentication and loading state.
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { Loader } from "lucide-react";
import React, { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  // isLoaded means if the data of the user is loaded or not
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        {/* The <StreamCall /> component is a declarative component wrapper around
        Call objects. It utilizes the StreamCallProvider to make the call and
        its state available to all child components. */}
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setSetup={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
