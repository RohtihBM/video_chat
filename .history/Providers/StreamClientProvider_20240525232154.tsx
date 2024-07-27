import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode } from "react";
import { useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  return <StreamVideo client={client}></StreamVideo>;
};

export default StreamVideoProvider;
