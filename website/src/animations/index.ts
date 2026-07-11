'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================================
   RAZEVÉL — GSAP Animation Utilities
   Centralized, reusable animation functions for luxury reveals.
   ============================================================ */

/**
 * Reveal elements upward with opacity fade.
 * Apply `.gsap-reveal` class to target elements.
 */
export function revealUp(
  elements: string | Element | Element[],
  options: {
    trigger?: string | Element;
    start?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
    y?: number;
  } = {}
) {
  const {
    trigger,
    start = 'top 85%',
    delay = 0,
    stagger = 0.1,
    duration = 1.2,
    y = 40,
  } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? { trigger, start, toggleActions: 'play none none none' }
        : undefined,
    }
  );
}

/**
 * Reveal an image using a clip-path mask animation.
 * Apply `.gsap-reveal-mask` class to target elements.
 */
export function revealMask(
  elements: string | Element | Element[],
  options: {
    trigger?: string | Element;
    start?: string;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
  } = {}
) {
  const {
    trigger,
    start = 'top 80%',
    duration = 1.4,
    direction = 'up',
  } = options;

  const clipPaths: Record<string, { from: string; to: string }> = {
    up: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
    down: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
    left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
  };

  return gsap.fromTo(
    elements,
    { clipPath: clipPaths[direction].from },
    {
      clipPath: clipPaths[direction].to,
      duration,
      ease: 'power4.inOut',
      scrollTrigger: trigger
        ? { trigger, start, toggleActions: 'play none none none' }
        : undefined,
    }
  );
}

/**
 * Split text into individual characters and animate them.
 * Wraps each character in a span for animation.
 */
export function splitTextReveal(
  element: HTMLElement,
  options: {
    trigger?: string | Element;
    start?: string;
    duration?: number;
    stagger?: number;
    delay?: number;
  } = {}
) {
  const {
    trigger,
    start = 'top 80%',
    duration = 0.8,
    stagger = 0.03,
    delay = 0,
  } = options;

  const text = element.textContent || '';
  element.innerHTML = '';
  element.style.overflow = 'hidden';

  // Create word containers
  const words = text.split(' ');
  const wordSpans: HTMLSpanElement[] = [];

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.style.overflow = 'hidden';

    word.split('').forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.style.display = 'inline-block';
      charSpan.style.transform = 'translateY(110%)';
      charSpan.classList.add('gsap-split-char');
      wordSpan.appendChild(charSpan);
    });

    element.appendChild(wordSpan);
    wordSpans.push(wordSpan);

    // Add space between words (not after the last word)
    if (wordIndex < words.length - 1) {
      const space = document.createTextNode('\u00A0');
      element.appendChild(space);
    }
  });

  const chars = element.querySelectorAll('.gsap-split-char');

  return gsap.to(chars, {
    y: '0%',
    opacity: 1,
    duration,
    delay,
    stagger,
    ease: 'power3.out',
    scrollTrigger: trigger
      ? { trigger, start, toggleActions: 'play none none none' }
      : undefined,
  });
}

/**
 * Parallax effect — moves element slower/faster than scroll.
 */
export function parallax(
  element: string | Element,
  options: {
    speed?: number;
    trigger?: string | Element;
    start?: string;
    end?: string;
  } = {}
) {
  const {
    speed = -50,
    trigger,
    start = 'top bottom',
    end = 'bottom top',
  } = options;

  return gsap.to(element, {
    y: speed,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || element,
      start,
      end,
      scrub: true,
    },
  });
}

/**
 * Scale reveal — image scales down from 1.15 to 1.0 as it scrolls into view.
 */
export function scaleReveal(
  element: string | Element,
  options: {
    trigger?: string | Element;
    start?: string;
    duration?: number;
  } = {}
) {
  const {
    trigger,
    start = 'top 85%',
    duration = 1.6,
  } = options;

  return gsap.fromTo(
    element,
    { scale: 1.15, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? { trigger, start, toggleActions: 'play none none none' }
        : undefined,
    }
  );
}

/**
 * Gold line draw animation — a decorative line scales from 0 to full width.
 */
export function drawLine(
  element: string | Element,
  options: {
    trigger?: string | Element;
    start?: string;
    duration?: number;
    delay?: number;
  } = {}
) {
  const {
    trigger,
    start = 'top 80%',
    duration = 1.2,
    delay = 0,
  } = options;

  return gsap.fromTo(
    element,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration,
      delay,
      ease: 'power3.inOut',
      scrollTrigger: trigger
        ? { trigger, start, toggleActions: 'play none none none' }
        : undefined,
    }
  );
}

/**
 * Staggered fade — for grids, lists, and card layouts.
 */
export function staggerFade(
  elements: string | Element | Element[],
  options: {
    trigger?: string | Element;
    start?: string;
    stagger?: number;
    duration?: number;
    y?: number;
  } = {}
) {
  const {
    trigger,
    start = 'top 80%',
    stagger = 0.15,
    duration = 1,
    y = 30,
  } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? { trigger, start, toggleActions: 'play none none none' }
        : undefined,
    }
  );
}
