"use client";

import { useEffect, useRef } from "react";
import styles from "./site.module.css";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 仅在支持精确指针（鼠标）的设备上启用
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let raf = 0;
    let visible = false;
    const DEFAULT = "#10120e";
    let color = DEFAULT;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
      }
    };
    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
    };

    const resolveColor = () => {
      const el = document.elementFromPoint(targetX, targetY);
      const sec = el?.closest<HTMLElement>("[data-dot-color]");
      const next = sec?.getAttribute("data-dot-color") || DEFAULT;
      if (next !== color) {
        color = next;
        dot.style.background = color;
      }
    };

    const tick = () => {
      // 轻微缓动，跟随更顺滑
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      resolveColor();
      raf = requestAnimationFrame(tick);
    };

    document.body.classList.add(styles.cursorNone);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove(styles.cursorNone);
    };
  }, []);

  return <div ref={dotRef} className={styles.cursorDot} aria-hidden />;
}
