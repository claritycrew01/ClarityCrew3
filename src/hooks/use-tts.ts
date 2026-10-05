"use client";

import { useState, useCallback, useEffect, useSyncExternalStore } from "react";
import {
  speak,
  stop,
  pause as pauseSpeech,
  resume as resumeSpeech,
  isSpeaking,
  isTTSSupported,
} from "@/lib/utils/tts";
import { useUIStore } from "@/lib/store/ui-store";

function subscribeNoop(): () => void {
  return () => {};
}

export function useTTS() {
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const ttsRate = useUIStore((s) => s.ttsRate);
  const supported = useSyncExternalStore(subscribeNoop, isTTSSupported, () => false);

  useEffect(() => {
    if (!supported) return;
    const interval = setInterval(() => {
      setSpeaking(isSpeaking());
      setPaused(isTTSSupported() && window.speechSynthesis.paused);
    }, 200);
    return () => clearInterval(interval);
  }, [supported]);

  const read = useCallback(
    (text: string) => {
      speak(text, { rate: ttsRate });
      setSpeaking(true);
    },
    [ttsRate]
  );

  const halt = useCallback(() => {
    stop();
    setSpeaking(false);
    setPaused(false);
  }, []);

  const pause = useCallback(() => {
    if (isSpeaking()) {
      pauseSpeech();
      setPaused(true);
    }
  }, []);

  const resume = useCallback(() => {
    if (isTTSSupported() && window.speechSynthesis.paused) {
      resumeSpeech();
      setPaused(false);
    }
  }, []);

  const toggle = useCallback(
    (text: string) => {
      if (speaking) {
        halt();
      } else {
        read(text);
      }
    },
    [speaking, halt, read]
  );

  return { read, halt, toggle, pause, resume, speaking, paused, supported };
}
