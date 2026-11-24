"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaSlot } from "../media-config";

/**
 * 案例产品屏幕播放器：视频循环播放 / UI 图轮播。
 * - 进入视口才播放，离开暂停，省电省流量
 * - 媒体加载失败（文件不存在等）时自动隐藏，露出底层静态画面
 */
export default function MediaPlayer({ slot }: { slot: MediaSlot }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setVisible(entries.some((e) => e.isIntersecting)),
      { rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 视频：可见时播放，离开暂停
  useEffect(() => {
    if (slot.mode !== "video") return;
    const v = videoRef.current;
    if (!v) return;
    if (visible) void v.play().catch(() => {});
    else v.pause();
  }, [visible, slot.mode]);

  // 轮播：可见时定时切换
  const slides = slot.slides ?? [];
  useEffect(() => {
    if (slot.mode !== "slides" || !visible || slides.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      slot.interval ?? 2500
    );
    return () => clearInterval(id);
  }, [slot.mode, slot.interval, visible, slides.length]);

  if (failed) return null;

  const b = slot.device?.bezel ?? 0;
  const mediaTransform = slot.bleed ? `scale(${1 + slot.bleed})` : undefined;

  return (
    <div
      ref={boxRef}
      style={{
        position: "absolute",
        left: slot.x - b,
        top: slot.y - b,
        width: slot.w + b * 2,
        height: slot.h + b * 2,
        borderRadius: (slot.r ?? 0) + b,
        background: b ? slot.device?.color ?? "#101010" : slot.bg ?? "#0b0c0a",
        boxShadow: b ? "0 26px 60px rgba(0,0,0,.38)" : undefined,
        padding: b,
        boxSizing: "border-box",
        zIndex: 5,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: slot.r,
          overflow: "hidden",
          background: "#000",
        }}
      >
        {slot.mode === "video" ? (
          <video
            ref={videoRef}
            src={slot.video}
            muted
            loop
            playsInline
            preload="metadata"
            poster={slot.poster}
            onError={() => setFailed(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: slot.fit ?? "cover",
              display: "block",
              transform: mediaTransform,
            }}
          />
        ) : (
          slides.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: slot.fit ?? "cover",
                opacity: i === index ? 1 : 0,
                transition: "opacity .6s ease",
                transform: mediaTransform,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
