import styles from "./site.module.css";
import { workIntro, workGroups } from "../content";
import { workImage } from "../work-images";

export default function Work() {
  return (
    <section
      className={`${styles.section} ${styles.work}`}
      id="work"
      data-rail-theme="dark"
    >
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.sectionLabel}>{workIntro.label}</div>
          <h2 className={styles.workTitle} style={{ marginTop: 24 }}>
            {workIntro.titleCn}
          </h2>
          <div className={styles.workTitleEn}>{workIntro.titleEn}</div>
          <p className={styles.workDesc}>{workIntro.desc}</p>

          {workGroups.map((g) => (
            <div className={styles.group} key={g.company}>
              <div className={styles.groupName}>{g.company}</div>
              <div className={styles.cards}>
                {g.projects.map((p, i) => {
                  const img = workImage(p.title);
                  return (
                    <article className={styles.card} key={p.title + i}>
                      <div className={styles.cardTop}>
                        <span>{p.num}</span>
                        <span className={styles.cardMeta}>{p.meta}</span>
                      </div>
                      {img && (
                        <div className={styles.cardThumb}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={img} alt={p.title} loading="lazy" />
                        </div>
                      )}
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                        <div className={styles.cardTitleEn}>{p.titleEn}</div>
                        <p className={styles.cardSummary}>{p.summary}</p>
                        <div className={styles.cardArrow}>↗</div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
