import type { CSSProperties } from "react";
import MediaPlayer from "./MediaPlayer";
import type { MediaSlot } from "../media-config";

type N = {
  id: string;
  t: string;
  n: string;
  x: number;
  y: number;
  w: number;
  h: number;
  op?: number;
  rot?: number;
  fill?: any[];
  stroke?: any[];
  r?: number;
  rr?: number[];
  fx?: any[];
  txt?: string;
  fs?: number;
  fw?: number | string;
  ff?: string;
  lh?: number | null;
  ls?: number;
  al?: string;
  c?: number[] | null;
  vec?: { d: string; fill: any }[];
  kids?: N[];
};

function col(c?: number[] | null) {
  if (!c) return undefined;
  const [r, g, b, a] = c;
  return a === undefined || a >= 1
    ? `rgb(${r},${g},${b})`
    : `rgba(${r},${g},${b},${a})`;
}

function gradCss(f: any): string | undefined {
  const stops = (f.stops || [])
    .slice()
    .sort((a: any, b: any) => a.p - b.p)
    .map((s: any) => `${col(s.c)} ${Math.round(s.p * 100)}%`)
    .join(", ");
  if (!stops) return undefined;
  if (f.type === "GRADIENT_RADIAL") return `radial-gradient(circle, ${stops})`;
  let angle = 180;
  if (f.handles && f.handles.length >= 2) {
    const [p0, p1] = f.handles;
    const dx = p1[0] - p0[0];
    const dy = p1[1] - p0[1];
    angle = Math.round((Math.atan2(dx, -dy) * 180) / Math.PI);
  }
  return `linear-gradient(${angle}deg, ${stops})`;
}

function imgLayer(f: any): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("${f.src}")`,
  };
  const tr = f.tr;
  if (tr && tr.length >= 2) {
    // Figma imageTransform: [[a,0,tx],[0,d,ty]] —— 只显示图片的某一块并铺满节点
    const a = tr[0][0] || 1;
    const tx = tr[0][2] || 0;
    const d = tr[1][1] || 1;
    const ty = tr[1][2] || 0;
    base.backgroundSize = `${100 / a}% ${100 / d}%`;
    base.backgroundPosition = `${a >= 1 ? 0 : (tx / (1 - a)) * 100}% ${
      d >= 1 ? 0 : (ty / (1 - d)) * 100
    }%`;
    return base;
  }
  if (f.fit === "FIT") {
    base.backgroundSize = "contain";
    base.backgroundPosition = "center";
  } else if (f.fit === "STRETCH") {
    base.backgroundSize = "100% 100%";
  } else {
    base.backgroundSize = "cover";
    base.backgroundPosition = "center";
  }
  return base;
}

function fontFamily(ff?: string) {
  if (!ff) return "var(--font-sans)";
  if (/Inter/i.test(ff)) return "var(--font-inter), Inter, sans-serif";
  return `"${ff}", var(--font-cjk)`;
}

function nodeStyle(n: N, x: number, y: number): CSSProperties {
  const s: CSSProperties = {
    position: "absolute",
    left: x,
    top: y,
    width: n.w,
  };
  if (n.t === "TEXT") {
    s.fontSize = n.fs;
    s.fontWeight = n.fw as any;
    s.fontFamily = fontFamily(n.ff);
    if (n.lh) s.lineHeight = `${n.lh}px`;
    if (n.ls) s.letterSpacing = `${n.ls}px`;
    if (n.c) s.color = col(n.c);
    s.textAlign = (n.al || "LEFT").toLowerCase() as any;
    // 判断是否为单行：源文件高度接近一行行高时禁止自动换行（避免字体差异导致的断行）
    const explicitLines = (n.txt || "").split("\n").length;
    const boxLines = n.lh ? Math.round(n.h / n.lh) : 1;
    s.whiteSpace = boxLines <= explicitLines ? "pre" : "pre-wrap";
    s.wordBreak = "break-word";
    s.overflow = "visible";
  } else {
    s.height = n.h;
    if (n.r) s.borderRadius = n.r;
    if (n.rr) s.borderRadius = n.rr.map((v: number) => `${v}px`).join(" ");
    if (n.t === "ELLIPSE") s.borderRadius = "50%";
    if (n.rot) s.transform = `rotate(${n.rot}deg)`;
  }
  if (n.op !== undefined) s.opacity = n.op;
  if ((n as any).clip) s.overflow = "hidden";

  for (const f of n.fill || []) {
    if (f.k === "solid") s.backgroundColor = col(f.c);
    else if (f.k === "grad") {
      const g = gradCss(f);
      if (g) s.backgroundImage = g;
    }
  }
  if (n.stroke && n.stroke.length) {
    const st = n.stroke[0];
    s.border = `${st.w || 1}px solid ${col(st.c)}`;
  }
  if (n.fx && n.fx.length) {
    s.boxShadow = n.fx
      .map(
        (e: any) =>
          `${e.t === "INNER_SHADOW" ? "inset " : ""}${e.x}px ${e.y}px ${e.b}px ${col(
            e.c
          )}`
      )
      .join(", ");
  }
  return s;
}

function Render({ n, px, py }: { n: N; px: number; py: number }) {
  const x = n.x - px;
  const y = n.y - py;

  // 文本
  if (n.t === "TEXT") {
    return (
      <div style={nodeStyle(n, x, y)}>{n.txt}</div>
    );
  }

  // 矢量
  if (n.t === "VECTOR" && n.vec && n.vec.length) {
    return (
      <svg
        style={{ position: "absolute", left: x, top: y, width: n.w, height: n.h }}
        viewBox={`${n.x} ${n.y} ${n.w} ${n.h}`}
        width={n.w}
        height={n.h}
      >
        {n.vec.map((v, i) => (
          <path key={i} d={v.d} fill={col(v.fill?.c) || "#000"} />
        ))}
      </svg>
    );
  }

  const imgs = (n.fill || []).filter((f: any) => f.k === "img" && f.src);

  // 处理蒙版：isMask 节点之后的兄弟节点会被该蒙版裁剪
  const rawKids = n.kids || [];
  const maskIdx = rawKids.findIndex((k: any) => k.m);
  let children = null;
  if (maskIdx >= 0) {
    const mask: any = rawKids[maskIdx];
    const before = rawKids.slice(0, maskIdx);
    const after = rawKids.slice(maskIdx + 1);
    children = (
      <>
        {before.map((c: any) => (
          <Render key={c.id} n={c} px={n.x} py={n.y} />
        ))}
        <div
          style={{
            position: "absolute",
            left: mask.x - n.x,
            top: mask.y - n.y,
            width: mask.w,
            height: mask.h,
            overflow: "hidden",
            borderRadius:
              mask.t === "ELLIPSE" ? "50%" : mask.r ? `${mask.r}px` : undefined,
          }}
        >
          {after.map((c: any) => (
            <Render key={c.id} n={c} px={mask.x} py={mask.y} />
          ))}
        </div>
      </>
    );
  } else {
    children = n.kids?.map((c) => <Render key={c.id} n={c} px={n.x} py={n.y} />);
  }

  return (
    <div style={nodeStyle(n, x, y)}>
      {imgs.map((f: any, i: number) => (
        <div key={i} style={imgLayer(f)} />
      ))}
      {children}
    </div>
  );
}

export default function FigmaFrame({
  data,
  media,
}: {
  data: { w: number; h: number; tree: N };
  media?: MediaSlot[];
}) {
  const root = data.tree;
  return (
    <div style={{ position: "relative", width: data.w, height: data.h, overflow: "hidden" }}>
      {root.kids?.map((c) => (
        <Render key={c.id} n={c} px={root.x} py={root.y} />
      ))}
      {media?.map((slot, i) => (
        <MediaPlayer key={i} slot={slot} />
      ))}
    </div>
  );
}
