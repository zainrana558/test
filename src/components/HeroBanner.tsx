"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props { featured: { id: string; title: string; description?: string; thumbnail?: string; primaryUrl?: string } }

export function HeroBanner({ featured }: Props) {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      {featured.thumbnail && <img src={featured.thumbnail} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4">{featured.title}</h1>
            {featured.description && <p className="text-lg text-zinc-300 mb-6">{featured.description}</p>}
            <Link href={`/watch/${featured.id}`} className="inline-flex px-6 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition-colors">Watch Now</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
