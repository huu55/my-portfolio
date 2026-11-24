import fs from "node:fs";
import path from "node:path";
import styles from "./site.module.css";
import { caseStudies } from "../content";
import FigmaFrame from "./FigmaFrame";
import ScaledFrame from "./ScaledFrame";
import { mediaSlots } from "../media-config";

// 案例页面：全部由 Figma 源结构渲染（文字为真实 HTML，密集视觉区块用源渲染裁片）
import case01 from "../frames/case-01-yangliuqing.json";
import case02 from "../frames/case-02-ai-office.json";
import case03 from "../frames/case-03-xiaodu.json";
import case04 from "../frames/case-04-driver-ai.json";
import case05 from "../frames/case-05-pengyipeng.json";
import case06 from "../frames/case-06-coupon.json";
import case07 from "../frames/case-07-yousheng.json";

const FRAME_DATA: Record<string, { w: number; h: number; tree: any }> = {
  "case-yangliuqing": case01 as any,
  "case-ai-office": case02 as any,
  "case-xiaodu": case03 as any,
  "case-driver-ai": case04 as any,
  "case-pengyipeng": case05 as any,
  "case-coupon": case06 as any,
  "case-yousheng": case07 as any,
};

function hasImage(file: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "figma", file));
  } catch {
    return false;
  }
}

export default function Portfolio() {
  return (
    <section
      className={`${styles.section} ${styles.portfolio}`}
      id="portfolio"
      data-rail-theme="lime"
      data-dot-color="#8FC7AE"
    >
      <div className={styles.portfolioHead}>
        <div className={styles.portfolioLabel}>
          [ 03 · 项目经历与作品集 PORTFOLIO ]
        </div>
        <h2 className={styles.portfolioTitle}>Selected Projects</h2>
        <nav className={styles.caseToc}>
          {caseStudies.map((c) => (
            <a className={styles.caseTocLink} key={c.id} href={`#${c.id}`}>
              {c.title}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.caseList}>
        {caseStudies.map((c) => {
          const data = FRAME_DATA[c.id];
          const ready = hasImage(c.file);
          return (
            <div className={styles.case} id={c.id} key={c.id}>
              <div className={styles.caseHead}>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <div className={styles.caseTitleEn}>{c.titleEn}</div>
                <div className={styles.caseMeta}>{c.meta}</div>
                <p className={styles.caseSummary}>{c.summary}</p>
              </div>

              {data ? (
                <ScaledFrame designWidth={data.w} height={data.h}>
                  <FigmaFrame data={data} media={mediaSlots[c.id]} />
                </ScaledFrame>
              ) : ready ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  className={styles.caseImg}
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                />
              ) : (
                <div className={styles.casePending}>详情视觉整理中 · 即将上线</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
