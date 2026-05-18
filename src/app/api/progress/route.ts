import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { supabaseAdmin } from "@/lib/db";

export async function POST(request: Request) {
  const session: any = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = session.user.id;
  const { videoId, progress, completed } = await request.json();
  if (!videoId || progress === undefined) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const { data, error } = await supabaseAdmin.from("watchProgress").upsert({ userId, videoId, progress, completed: completed || false, updatedAt: new Date().toISOString() }, { onConflict: "userId,videoId" }).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
