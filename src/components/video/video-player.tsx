"use client";

import { useState, useRef, useSyncExternalStore } from "react";
import { Play, WifiOff, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  channel: string;
  className?: string;
}

function subscribeOnLine(callback: () => void): () => void {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export function VideoPlayer({ youtubeId, title, channel, className }: VideoPlayerProps) {
  const [loaded, setLoaded] = useState(false);
  const [offlineDismissed, setOfflineDismissed] = useState(false);
  const [triedLoad, setTriedLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const onLine = useSyncExternalStore(
    subscribeOnLine,
    () => navigator.onLine,
    () => true
  );
  const isOffline = !onLine && !offlineDismissed;

  const handleLoad = () => {
    setTriedLoad(true);
    setLoaded(true);
  };

  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&color=white`;
  const watchUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <div className={cn("group relative overflow-hidden rounded-md border border-border bg-card", className)}>
      {/* Internet caveat microcopy */}
      <div className="flex items-center gap-1.5 px-4 pt-3 text-[11px] text-muted-foreground">
        <span className="inline-block h-1 w-1 rounded-full bg-skill-blue-solid" aria-hidden="true" />
        Requires an internet connection to play
      </div>

      <div ref={containerRef} className="relative aspect-video w-full bg-muted">
        {isOffline && !loaded ? (
          /* ── Offline fallback ── */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted/80 p-6 text-center backdrop-blur-sm">
            <div className="rounded-full bg-premium-amber/10 p-3">
              <WifiOff className="h-6 w-6 text-premium-amber-text" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-foreground">You&apos;re offline</p>
            <p className="max-w-xs text-xs text-muted-foreground">
              Connect to the internet to watch this video, or continue reading the lesson below.
            </p>
            <button
              onClick={() => {
                setOfflineDismissed(true);
                handleLoad();
              }}
              className="mt-1 inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-background px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Try anyway
            </button>
          </div>
        ) : loaded ? (
          /* ── YouTube iframe ── */
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        ) : (
          /* ── Lazy thumbnail / play button ── */
          <button
            onClick={handleLoad}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-colors hover:bg-muted/60"
          >
            <div className="rounded-full bg-skill-blue/90 p-4 shadow-lg transition-transform group-hover:scale-105">
              <Play className="h-8 w-8 text-white" fill="white" aria-hidden="true" />
            </div>
            <span className="text-sm font-medium text-foreground">{title}</span>
            <span className="text-xs text-muted-foreground">{channel}</span>
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{title}</p>
          <p className="truncate text-xs text-muted-foreground">{channel}</p>
        </div>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 inline-flex min-h-11 shrink-0 items-center gap-1 rounded-md border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Open
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
