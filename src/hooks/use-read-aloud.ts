"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTTS } from "@/hooks/use-tts";
import { usePreferencesApplied } from "@/hooks/use-preferences-applied";
import { useUIStore } from "@/lib/store/ui-store";
import { isTTSSupported } from "@/lib/utils/tts";

export function useReadAloud(text: string) {
  const { hydrated, prefs } = usePreferencesApplied();
  const { read, pause, resume, halt, speaking, paused, supported } = useTTS();
  const [blockedText, setBlockedText] = useState<string | null>(null);
  const readRef = useRef(read);
  const ttsRate = useUIStore((s) => s.ttsRate);
  const setTtsRate = useUIStore((s) => s.setTtsRate);

  useEffect(() => {
    readRef.current = read;
  });

  const enabled = hydrated && prefs.readAloudEnabled;

  useEffect(() => {
    if (enabled && supported && text) {
      readRef.current(text);
      const timer = window.setTimeout(() => {
        if (isTTSSupported()) {
          const synth = window.speechSynthesis;
          if (!synth.speaking && !synth.pending) setBlockedText(text);
        }
      }, 500);
      return () => {
        window.clearTimeout(timer);
        halt();
      };
    }
    return () => {
      halt();
    };
  }, [enabled, supported, text, halt]);

  const blocked = blockedText === text;

  const play = useCallback(() => {
    setBlockedText(null);
    readRef.current(text);
  }, [text]);

  return {
    visible: hydrated && supported,
    speaking,
    paused,
    blocked,
    rate: ttsRate,
    setRate: setTtsRate,
    play,
    pause,
    resume,
    stop: halt,
  };
}
