"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * 自适应缩放 + 懒挂载容器：
 * - 宽度按设计稿 1700 等比缩放到容器宽度（zoom，布局同时缩放，保持清晰）
 * - 进入视口附近才挂载内部 DOM，避免一次性渲染上万个节点
 */
export default function ScaledFrame({
  designWidth,
  height,
  children,
}: {
  designWidth: number;
  height: number;
  children: ReactNode;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / designWidth);
    });
    ro.observe(el);
    setScale(el.clientWidth > 0 ? el.clientWidth / designWidth : 1);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" }
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [designWidth]);

  return (
    <div
      ref={outer}
      style={{
        width: "100%",
        maxWidth: 1700,
        margin: "0 auto",
        height: mounted ? undefined : Math.round(height * scale),
        overflow: "hidden",
      }}
    >
      <div style={{ zoom: scale, width: designWidth }}>{mounted ? children : null}</div>
    </div>
  );
}
