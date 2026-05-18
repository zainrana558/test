import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  let query = supabaseAdmin.from("videos").select("id, title, description, thumbnail, category, primaryUrl, backupUrl, duration, isPremium, isPublished").eq("isPublished", true).order("createdAt", { ascending: false }).limit(50);
  if (category) query = query.eq("category", category);
  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { headers: { "Cache-Control": "public, s-maxage=60" } });
}
