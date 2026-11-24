export type MediaSlot = {
  /** 设计坐标（相对 1700 宽画板） */
  x: number;
  y: number;
  w: number;
  h: number;
  /** 圆角，贴合手机/屏幕边框 */
  r?: number;
  mode: "video" | "slides";
  /** mode=video 时使用 */
  video?: string;
  /** mode=slides 时使用 */
  slides?: string[];
  fit?: "cover" | "contain";
  /** 幻灯片停留时间（ms），默认 2500 */
  interval?: number;
  /** 播放区底色，避免视频加载前透出旧画面 */
  bg?: string;
  /** 视频封面（首帧），加载前先显示 */
  poster?: string;
  /** 画面略微放大（0.02 = 2%），用于补齐边缘 1-2px 的贴合误差 */
  bleed?: number;
  /** 额外绘制手机/设备边框 */
  device?: { bezel: number; color?: string };
};

/**
 * 每个案例的「产品屏幕」播放位。
 * 文件放到 public/media/ 下即可生效；文件不存在时会自动回退到静态画面。
 */
export const mediaSlots: Record<string, MediaSlot[]> = {
  // 杨柳青：手机屏幕 x981 y483 253×480，播放录制视频
  "case-yangliuqing": [
    {
      x: 981,
      y: 483,
      w: 253,
      h: 480,
      r: 32,
      mode: "video",
      video: "/media/yangliuqing.mp4",
      poster: "/media/yangliuqing-poster.jpg",
      fit: "cover",
      bleed: 0.02,
      device: { bezel: 4, color: "#0c0c0c" },
    },
  ],

  // 小度：智能屏屏幕 x838 y3719 460×265，播放横屏视频
  "case-xiaodu": [
    {
      x: 835,
      y: 3716,
      w: 466,
      h: 272,
      r: 10,
      mode: "video",
      video: "/media/xiaodu.mp4",
      poster: "/media/xiaodu-poster.jpg",
      fit: "cover",
      bleed: 0.03,
    },
  ],

  // 优胜教育：横屏设备屏幕 x736 y2333 615×284，轮播横屏 UI
  "case-yousheng": [
    {
      x: 736,
      y: 2333,
      w: 615,
      h: 284,
      r: 33,
      mode: "slides",
      slides: [
        "/media/slides/ys-0.webp",
        "/media/slides/ys-1.webp",
        "/media/slides/ys-2.webp",
        "/media/slides/ys-3.webp"
      ],
      fit: "contain",
      interval: 2500,
    },
  ],

  // 花小猪卡券改版：从源渲染切出的 9 张界面轮播
  "case-coupon": [
    {
      x: 927,
      y: 1003,
      w: 219,
      h: 473,
      r: 25,
      mode: "slides",
      slides: [
        "/media/slides/coupon-0.webp",
        "/media/slides/coupon-1.webp",
        "/media/slides/coupon-2.webp",
        "/media/slides/coupon-3.webp",
        "/media/slides/coupon-4.webp",
        "/media/slides/coupon-5.webp",
        "/media/slides/coupon-6.webp",
        "/media/slides/coupon-7.webp",
        "/media/slides/coupon-8.webp"
      ],
      fit: "cover",
      device: { bezel: 4, color: "#0c0c0c" },
      bleed: 0.02,
      interval: 2200,
    },
  ],
  // 花小猪碰一碰：从拼接稿切出的界面轮播（沿用设计中的手机边框）
  "case-pengyipeng": [
    {
      x: 927,
      y: 1335,
      w: 219,
      h: 475,
      r: 25,
      mode: "slides",
      slides: [
        "/media/slides/peng-0.webp",
        "/media/slides/peng-1.webp",
        "/media/slides/peng-2.webp",
        "/media/slides/peng-3.webp",
        "/media/slides/peng-4.webp",
        "/media/slides/peng-5.webp",
        "/media/slides/peng-6.webp",
        "/media/slides/peng-7.webp",
        "/media/slides/peng-8.webp",
        "/media/slides/peng-11.webp",
        "/media/slides/peng-12.webp",
        "/media/slides/peng-13.webp"
      ],
      fit: "cover",
      device: { bezel: 4, color: "#0c0c0c" },
      bleed: 0.02,
      interval: 2400,
    },
  ],

  // 司机 AI 听单助手：从拼接稿切出的界面轮播
  "case-driver-ai": [
    {
      x: 928,
      y: 1438,
      w: 218,
      h: 472,
      r: 25,
      mode: "slides",
      slides: [
        "/media/slides/driver-0.webp",
        "/media/slides/driver-1.webp",
        "/media/slides/driver-2.webp",
        "/media/slides/driver-3.webp",
        "/media/slides/driver-4.webp",
        "/media/slides/driver-5.webp",
        "/media/slides/driver-6.webp",
        "/media/slides/driver-7.webp",
        "/media/slides/driver-8.webp",
        "/media/slides/driver-9.webp",
        "/media/slides/driver-10.webp",
        "/media/slides/driver-11.webp",
        "/media/slides/driver-12.webp",
        "/media/slides/driver-13.webp",
        "/media/slides/driver-14.webp",
        "/media/slides/driver-15.webp",
        "/media/slides/driver-16.webp",
        "/media/slides/driver-17.webp"
      ],
      fit: "cover",
      device: { bezel: 4, color: "#0c0c0c" },
      bleed: 0.02,
      interval: 2400,
    },
  ],
};
