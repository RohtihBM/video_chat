import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode } from "react";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    return () => {};
  }, [user, isLoaded]);
  return <StreamVideo client={videoClient}></StreamVideo>;
};

export default StreamVideoProvider;
