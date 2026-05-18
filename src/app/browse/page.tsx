import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { MovieCard } from "@/components/MovieCard";
import { HeroBanner } from "@/components/HeroBanner";
import { supabaseAdmin } from "@/lib/db";

export const metadata: Metadata = { title: "Browse | luminaa2" };

async function getVideos() {
  const { data } = await supabaseAdmin.from("videos").select("id, title, description, thumbnail, category, primaryUrl, backupUrl, duration, isPremium").eq("isPublished", true).order("createdAt", { ascending: false }).limit(20);
  return data || [];
}

async function getFeatured() {
  const { data } = await supabaseAdmin.from("videos").select("id, title, description, thumbnail, primaryUrl").eq("isPublished", true).order("createdAt", { ascending: false }).limit(1).single();
  return data;
}

export default async function BrowsePage() {
  const videos = await getVideos();
  const featured = await getFeatured();
  const displayVideos = videos.length > 0 ? videos : [{ id: "1", title: "Sample Movie", description: "A thrilling adventure", thumbnail: "/placeholder.jpg", category: "Action", primaryUrl: "/sample.m3u8", backupUrl: null, duration: 7200, isPremium: false }];
  const displayFeatured = featured || displayVideos[0];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      {displayFeatured && <HeroBanner featured={{ id: displayFeatured.id, title: displayFeatured.title, description: displayFeatured.description, thumbnail: displayFeatured.thumbnail, primaryUrl: displayFeatured.primaryUrl }} />}
      <main className="px-4 md:px-8 pb-16">
        <h2 className="text-2xl font-bold text-white mb-6 mt-8">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {displayVideos.map((video: any) => <MovieCard key={video.id} video={video} />)}
        </div>
      </main>
    </div>
  );
}
