// 作品卡片展示图（从 Figma Selected Works 源渲染裁切）
export const workImages: Record<string, string> = {
  "ai原生办公协同平台": "/figma/work/ai-885-1065.webp",
  "优胜教育线上学习app": "/figma/work/app-1293-2362.webp",
  "司机ai听单助手": "/figma/work/ai-1292-1550.webp",
  "司机自首规则整改": "/figma/work/card-884-1910.webp",
  "小度多agent协作儿童产品": "/figma/work/agent-1292-1065.webp",
  "杨柳青年画小程序": "/figma/work/card-1293-592.webp",
  "聚好赚代驾端界面改版": "/figma/work/card-478-1550.webp",
  "花小猪司机端卡券改版": "/figma/work/card-478-1909.webp",
  "花小猪司机端界面改版": "/figma/work/card-885-1550.webp",
  "花小猪支付宝碰一碰": "/figma/work/x-1291-1910.webp",
};

export function workImage(title: string): string | undefined {
  const key = title.replace(/[\s·\-_xX]/g, "").toLowerCase();
  return workImages[key];
}
