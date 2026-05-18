"use client";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface Props {
  videoId: string;
  primaryUrl: string;
  backupUrl?: string;
  title: string;
  initialProgress?: number;
  poster?: string;
}

export function VideoPlayer({ videoId, primaryUrl, backupUrl, title, initialProgress = 0, poster }: Props) {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [useBackup, setUseBackup] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: "auto",
      fluid: true,
      sources: [{ src: useBackup && backupUrl ? backupUrl : primaryUrl, type: "application/x-mpegURL" }],
      html5: { vhs: { overrideNative: true } },
    });
    playerRef.current = player;

    player.on("error", () => {
      if (!useBackup && backupUrl) {
        setUseBackup(true);
        setError("Switching to backup stream...");
      } else {
        setError("Unable to load video");
      }
    });

    if (initialProgress > 0) {
      player.on("loadedmetadata", () => player.currentTime(initialProgress));
    }

    return () => player.dispose();
  }, [primaryUrl, backupUrl, useBackup]);

  const saveProgress = async (currentTime: number) => {
    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoId, progress: Math.floor(currentTime), completed: false }),
      });
    } catch (e) { console.error("Failed to save progress", e); }
  };

  return (
    <div className="w-full">
      {error && <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white z-10">{error}</div>}
      <video ref={videoRef} className="video-js vjs-big-play-centered vjs-theme-forest" poster={poster} />
    </div>
  );
}
