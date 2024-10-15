//import {z} from "zod";
import {Hono} from "hono";
import {handle} from "hono/vercel";
//import { zValidator } from "@hono/zod-validator";
// import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";

export const runtime = "edge";  //we can write node as well
//plaid uses axios on the backend you'll have to remove this then 

const app = new Hono().basePath("/api");

// app
//     .get("/hello",
//         clerkMiddleware(),
//         helloController(),
    
// );

export const GET = handle(app);
export const POST= handle(app);


