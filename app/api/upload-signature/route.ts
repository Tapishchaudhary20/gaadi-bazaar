import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
export async function POST() { const session=await getServerSession(authOptions);if(!session?.user?.id)return NextResponse.json({error:"Sign in first."},{status:401});const{CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET}=process.env;if(!CLOUDINARY_CLOUD_NAME||!CLOUDINARY_API_KEY||!CLOUDINARY_API_SECRET)return NextResponse.json({error:"Cloudinary is not configured."},{status:503});cloudinary.config({cloud_name:CLOUDINARY_CLOUD_NAME,api_key:CLOUDINARY_API_KEY,api_secret:CLOUDINARY_API_SECRET});const timestamp=Math.floor(Date.now()/1000);const folder="automarket/listings";const signature=cloudinary.utils.api_sign_request({timestamp,folder},CLOUDINARY_API_SECRET);return NextResponse.json({timestamp,folder,signature,apiKey:CLOUDINARY_API_KEY,cloudName:CLOUDINARY_CLOUD_NAME}); }
