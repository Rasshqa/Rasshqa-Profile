'use client';

import { useEffect, useRef } from 'react';

export default function SoundEffects() {
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio elements
    hoverSoundRef.current = new Audio('/sounds/click.mp3');
    hoverSoundRef.current.volume = 0.1;

    const playHoverSound = () => {
      if (hoverSoundRef.current) {
        // Reset time to allow quick rapid plays
        hoverSoundRef.current.currentTime = 0;
        hoverSoundRef.current.play().catch(e => {
          // Autoplay policy might block it until first user interaction, that's fine
        });
      }
    };

    const attachListeners = () => {
      const interactables = document.querySelectorAll('a, button, input, textarea');
      interactables.forEach((el) => {
        // Only attach if not already attached
        if (!el.hasAttribute('data-sound-attached')) {
          el.addEventListener('mouseenter', playHoverSound);
          el.setAttribute('data-sound-attached', 'true');
        }
      });
    };

    // Attach initially
    attachListeners();

    // Set up a mutation observer to attach sounds to dynamically rendered elements
    const observer = new MutationObserver(mutations => {
      let shouldReattach = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldReattach = true;
          break;
        }
      }
      if (shouldReattach) {
        attachListeners();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const interactables = document.querySelectorAll('a, button, input, textarea');
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', playHoverSound);
      });
    };
  }, []);

  return null;
}
