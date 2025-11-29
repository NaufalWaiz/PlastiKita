"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    if (!items.length) return;

    document.documentElement.classList.add("sr-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Reveal anything already in view on mount
    const revealIfVisible = () => {
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        if (inView) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    };

    requestAnimationFrame(revealIfVisible);

    items.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("sr-ready");
    };
  }, []);

  return null;
}
