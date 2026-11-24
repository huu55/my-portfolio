// 站点内容数据（提取自 Figma 设计稿「HYB Portfolio」）
export const profile = {
  name: "胡倚碧",
  nameEn: "HU YIBI",
  roles: ["UI / UX Designer", "Industrial Designer"],
  location: "北京",
  locationEn: "BEIJING · CHINA",
  email: "huyibi0509@163.com",
  phone: "15910322635",
};

export const nav = [
  { id: "about", label: "关于我 ABOUT" },
  { id: "work", label: "实习经历与产出 WORK" },
  { id: "portfolio", label: "项目经历与作品集 PORTFOLIO" },
];

export const about = {
  label: "[ 01 · 关于我 ABOUT ]",
  eyebrow: "您好, 我是胡倚碧",
  bio: "北京林业大学工业设计专业研二在读研究生，研究方向聚焦交互与体验设计、交叉学科融合。",
  headline: "探索数字产品与实体产品之间的体验设计",
  education: [
    {
      date: "2024.09 - 2027.06",
      org: "北京林业大学（研二）",
      meta: "工业设计专业 · 专业均分 93 · 排名前 5%",
      desc: "研究方向：交互与体验设计、交叉学科融合。主修课程：设计表达、艺术学理论、社会创新设计、交叉学科融合设计、产品设计与表达、工业设计专题等。",
    },
    {
      date: "2019.09 - 2023.07",
      org: "北方工业大学（本科）",
      meta: "工业设计专业 · 专业均分 90 · 排名前 10%",
      desc: "研究方向：智能家居产品设计、文创设计。主修课程：基础计算机辅助设计、产品设计及原理、产品造型基础、交互设计基础、工程制图、设计程序与方法、平面构成、立体构成等。",
    },
  ],
  internships: [
    {
      date: "2026.7 — NOW",
      org: "百度",
      role: "体验设计师",
      desc: "横向：负责百度内部 Web 端 AI 原生办公协同平台，建立辅助设计 skill，协助建立设计 AI agent 以及灰度测试，协助产研团队完成产品的需求分析和用户研究，产出合理的设计方案。纵向：参与测试实验，完成设计方案撰写、交互和界面设计。",
    },
    {
      date: "2026.4 — 2026.7",
      org: "滴滴出行",
      role: "交互设计师",
      desc: "参与花小猪司机端界面改版、聚好赚代驾端界面改版，独立完成司机端司机福利社改版、支付宝碰一碰、司机听单助手、司机自首规则整改的交互和界面设计工作。协助产研团队完成需求分析和用户研究，产出合理的设计方案；参与测试实验并根据上线后的功能反馈持续迭代。",
    },
    {
      date: "2025.12 — 2026.3",
      org: "作业帮",
      role: "产品运营",
      desc: "负责高中年级产品全生命周期用户运营，构建用户分层标签，实现分群运营，设计落地学习打卡、错题激励、资料权益等促活与召回活动。最终新用户 7 日留存提升 12%，日均活跃用户增长 15%，沉默用户召回率提升 8%，核心功能使用率提升 18%。",
    },
  ],
  skills: [
    { label: "UI | UX", tools: ["Figma", "Sd", "Mj", "Codex"] },
    { label: "工业设计", tools: ["KeyShot", "Rhino", "SolidWorks"] },
    { label: "AI 模型", tools: ["Stable Diffusion", "Midjourney", "Codex"] },
    { label: "技能证书", tools: ["全国计算机二级", "CET-6", "校级一等奖学金", "NCDA 未来设计师二等奖"] },
  ],
};

export type Project = {
  num: string;
  title: string;
  titleEn: string;
  meta: string;
  summary: string;
};

export const workIntro = {
  label: "[ 02 · 实习经历与产出 WORK ]",
  titleCn: "实习经历与产出",
  titleEn: "Works",
  desc: "四个方向，跨越数字产品、实体体验与 AI 探索。",
};

// 项目卡片按公司分组
export const workGroups: { company: string; projects: Project[] }[] = [
  {
    company: "BAIDU · AI Coding",
    projects: [
      { num: "05", title: "杨柳青年画小程序", titleEn: "Yangliuqing New Year Paintings APP", meta: "PM / UI / UX · Figma", summary: "杨柳青木版年画数字制作体验小程序，围绕非遗文化打造年画创作与体验流程。" },
      { num: "07", title: "AI 原生办公协同平台", titleEn: "AI-native office collaboration platform", meta: "PM / UX / UI · Figma · After Effects", summary: "建立百度内部 AI 原生办公协同平台，提供专业、高质量设计解决方案，建立设计 skill、agent，完成 agent 页面交互和界面设计。" },
      { num: "07", title: "小度 · 多 Agent 协作儿童产品", titleEn: "Xiaodu Multi-Agent Collaborative Children's Product", meta: "PM / UX / UI · Figma · After Effects", summary: "31st Hackathon 大赛作品 —— 厂内第一名。" },
    ],
  },
  {
    company: "DIDI",
    projects: [
      { num: "03", title: "花小猪司机端界面改版", titleEn: "Revised interface of Huaxiaozhu driver terminal", meta: "UI / UX · Figma", summary: "对整个 App 界面进行改版，针对用户反馈增强个性化功能和视觉表现，增加活动内容，优化接送驾流程，统一页面尺寸规范。" },
      { num: "04", title: "司机 AI 听单助手", titleEn: "Driver AI Order Assistant", meta: "UI / UX · Figma · After Effects", summary: "在司机端增加 AI 助手，辅助司机听单、关单、智能搜索等。包括 AI 助手形象设计、出行卡券设计、视觉表现与交互逻辑设计。" },
      { num: "06", title: "花小猪 x 支付宝碰一碰", titleEn: "Hua Xiaozhu x Alipay \u201cTouch and Go\u201d", meta: "PM / UI / UX · Figma", summary: "对支付宝碰一碰界面进行体验和交互设计，展示广告并提供多样化优惠券；司机绑定物料并引导乘客使用可获推荐奖励，促进广告收益。" },
      { num: "01", title: "花小猪司机端卡券改版", titleEn: "Huaxiaozhu Driver's Card Voucher Rebranding", meta: "UI / UX · Figma", summary: "解决活动卡券策略信息透传不精准的问题，增强卡券视觉表现，优化卡券出现位置，提高司机购卡体验和卡渗透率。" },
      { num: "02", title: "聚好赚代驾端界面改版", titleEn: "Revised interface of Juhaojia platform", meta: "UI / UX · Figma", summary: "增强视觉表现并统一整体视觉规范，重新设计接送驾地图，增加领取奖励功能与 H5 活动界面，优化入口与 LOGO。" },
      { num: "05", title: "司机自首规则整改", titleEn: "Reform of the driver's voluntary surrender rule", meta: "UI / UX · Figma", summary: "根据用户反馈，对司机绕路多收费和任意取消订单进行策略优化，增加二次确认、变更按钮文案，确认后再进入收款流程。" },
    ],
  },
  {
    company: "Education",
    projects: [
      { num: "07", title: "优胜教育线上学习 APP", titleEn: "Yousheng Education Online Learning App", meta: "PM / UX / UI · Figma · After Effects", summary: "从家长视角出发，设计具有学生端与家长端双端显示的线上教育产品，让家长在外也能监督孩子的线上学习。" },
    ],
  },
];

// 项目详情案例（Figma 中的长图，导出为图片展示；若图片未就绪则展示图文卡片）
export type CaseStudy = {
  id: string;
  title: string;
  titleEn: string;
  meta: string;
  summary: string;
  img: string;
  file: string; // public 下的相对文件名，用于存在性检测
};

export const caseStudies: CaseStudy[] = [
  {
    id: "case-yangliuqing",
    title: "杨柳青年画小程序",
    titleEn: "Yangliuqing New Year Paintings · Mini Program",
    meta: "PM / UI / UX · Figma",
    summary:
      "围绕杨柳青木版年画这一非物质文化遗产，设计年画数字制作与体验小程序，让用户在线完成勾线、填色等创作流程，降低非遗体验门槛。",
    img: "/figma/case-01-yangliuqing.png",
    file: "case-01-yangliuqing.png",
  },
  {
    id: "case-ai-office",
    title: "AI 原生办公协同平台",
    titleEn: "AI-native Office Collaboration Platform",
    meta: "PM / UX / UI · Figma · After Effects",
    summary:
      "搭建百度内部 AI 原生办公协同平台，建立设计 skill 与设计 AI agent，完成 agent 页面的交互与界面设计，协助产研完成需求分析与灰度测试。",
    img: "/figma/case-02-ai-office.png",
    file: "case-02-ai-office.png",
  },
  {
    id: "case-xiaodu",
    title: "小度 · 多 Agent 协作儿童教育产品",
    titleEn: "Xiaodu Multi-Agent Collaborative Children's Product",
    meta: "PM / UX / UI · Figma · After Effects",
    summary:
      "面向儿童教育场景的多 Agent 协作产品，31st Hackathon 大赛作品，获厂内第一名。探索多个智能体如何协同完成陪伴式学习。",
    img: "/figma/case-03-xiaodu.png",
    file: "case-03-xiaodu.png",
  },
  {
    id: "case-driver-ai",
    title: "司机 AI 听单助手",
    titleEn: "Driver AI Order Assistant",
    meta: "UI / UX · Figma · After Effects",
    summary:
      "在滴滴司机端引入 AI 助手，辅助司机听单、关单与智能搜索，缓解平峰接单焦虑。包含 AI 助手形象、出行卡券与视觉表现的整体设计。",
    img: "/figma/case-04-driver-ai.png",
    file: "case-04-driver-ai.png",
  },
  {
    id: "case-pengyipeng",
    title: "花小猪 x 支付宝碰一碰",
    titleEn: "Hua Xiaozhu x Alipay \u201cTouch and Go\u201d",
    meta: "PM / UI / UX · Figma",
    summary:
      "对支付宝碰一碰界面进行体验与交互设计，展示广告并提供多样化优惠券；司机绑定物料、引导乘客使用可获推荐奖励，促进广告收益。",
    img: "/figma/case-05-pengyipeng.png",
    file: "case-05-pengyipeng.png",
  },
  {
    id: "case-coupon",
    title: "花小猪司机端卡券改版",
    titleEn: "Huaxiaozhu Driver Card & Voucher Rebranding",
    meta: "UI / UX · Figma",
    summary:
      "解决活动卡券策略信息透传不精准的问题，增强卡券视觉表现、优化出现位置，提升司机购卡体验与卡渗透率。",
    img: "/figma/case-06-coupon.png",
    file: "case-06-coupon.png",
  },
  {
    id: "case-yousheng",
    title: "优胜教育线上学习 APP",
    titleEn: "Yousheng Education Online Learning App",
    meta: "PM / UX / UI · Figma · After Effects",
    summary:
      "从家长视角出发，设计学生端与家长端双端显示的线上教育产品，让家长在外也能监督孩子的线上课程学习。",
    img: "/figma/case-07-yousheng.png",
    file: "case-07-yousheng.png",
  },
];
