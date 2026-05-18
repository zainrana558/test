import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "luminaa2 - Stream Premium Movies & Shows" };

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold text-white mb-4">luminaa<span className="text-rose-500">2</span></h1>
      <p className="text-xl text-zinc-400 mb-8">Stream premium movies and shows in stunning quality</p>
      <div className="flex gap-4">
        <Link href="/browse" className="px-6 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition-colors">Browse Movies</Link>
        <Link href="/login" className="px-6 py-3 border border-zinc-700 hover:bg-zinc-800 rounded-lg font-semibold transition-colors">Sign In</Link>
      </div>
    </div>
  );
}
