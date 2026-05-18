"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props { video: { id: string; title: string; thumbnail?: string; category?: string; isPremium?: boolean } }

export function MovieCard({ video }: Props) {
  return (
    <Link href={`/watch/${video.id}`}>
      <motion.div whileHover={{ scale: 1.05 }} className="relative aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900">
        {video.thumbnail && <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 p-4">
          <h3 className="font-semibold text-white truncate">{video.title}</h3>
          <p className="text-sm text-zinc-400">{video.category}</p>
        </div>
        {video.isPremium && <span className="absolute top-2 right-2 px-2 py-1 bg-rose-600 text-xs rounded">Premium</span>}
      </motion.div>
    </Link>
  );
}
