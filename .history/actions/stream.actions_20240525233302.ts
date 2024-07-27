"use server";

import { currentUser } from "@clerk/nextjs/server";
import { error } from "console";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async()=>{
    const user = await currentUser();

    if(!user) throw new Error('user is not logged in');
    if(!apiKey) throw new Error('no api key');
    if(!apiSecret) throw new Error('no api secret');

    const streamClient = new streamClient
}