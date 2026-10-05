"use client";

import { useState, useCallback, useEffect, useSyncExternalStore } from "react";
import { speak, stop, isSpeaking, isTTSSupported } from "@/lib/utils/tts";
import { useUIStore } from "@/lib/store/ui-store";

function subscribeNoop(): () => void {
  return () => {};
}

export function useTTS() {
  const [speaking, setSpeaking] = useState(false);
  const ttsRate = useUIStore((s) => s.ttsRate);
  const supported = useSyncExternalStore(subscribeNoop, isTTSSupported, () => false);

  useEffect(() => {
    if (!supported) return;
    const interval = setInterval(() => {
      setSpeaking(isSpeaking());
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

  return { read, halt, toggle, speaking, supported };
}
