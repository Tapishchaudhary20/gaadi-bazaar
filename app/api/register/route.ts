import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
const signup = z.object({ name: z.string().trim().min(2).max(80), email: z.string().email().transform(v=>v.toLowerCase()), password: z.string().min(8).max(100) });
export async function POST(request: Request) { const parsed=signup.safeParse(await request.json()); if(!parsed.success)return NextResponse.json({error:"Enter a name, valid email, and password with at least 8 characters."},{status:400}); try { const passwordHash=await hash(parsed.data.password,12);const user=await prisma.user.create({data:{...parsed.data,passwordHash}});return NextResponse.json({id:user.id},{status:201}); } catch { return NextResponse.json({error:"An account with that email may already exist."},{status:409}); } }
