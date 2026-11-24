import styles from "./site.module.css";
import { about, profile } from "../content";

export default function About() {
  return (
    <section
      className={`${styles.section} ${styles.about}`}
      id="about"
      data-rail-theme="dark"
    >
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.sectionLabel}>{about.label}</div>

          <div className={styles.aboutHead} style={{ marginTop: 40 }}>
            <div className={styles.portrait}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma/portrait.jpg" alt="胡倚碧 portrait" />
              <div className={styles.portraitMeta}>
                <span>{profile.nameEn}</span>
                <span>{profile.locationEn}</span>
              </div>
            </div>
            <div className={styles.intro}>
              <div className={styles.eyebrow}>{about.eyebrow}</div>
              <p className={styles.bio}>{about.bio}</p>
              <h2 className={styles.headline}>{about.headline}</h2>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.blockTitle}>教育经历</div>
            {about.education.map((e) => (
              <div className={styles.row} key={e.org}>
                <div className={styles.rDate}>{e.date}</div>
                <div className={styles.rOrg}>{e.org}</div>
                <div className={styles.rRole}>{e.meta}</div>
                <div className={styles.rDesc}>{e.desc}</div>
              </div>
            ))}
          </div>

          <div className={styles.block}>
            <div className={styles.blockTitle}>实习经历</div>
            {about.internships.map((e) => (
              <div className={styles.row} key={e.org}>
                <div className={styles.rDate}>{e.date}</div>
                <div className={styles.rOrg}>{e.org}</div>
                <div className={styles.rRole}>{e.role}</div>
                <div className={styles.rDesc}>{e.desc}</div>
              </div>
            ))}
          </div>

          <div className={styles.skills}>
            {about.skills.map((s) => (
              <div className={styles.skillCard} key={s.label}>
                <div className={styles.skillLabel}>{s.label}</div>
                <div className={styles.chips}>
                  {s.tools.map((t) => (
                    <span className={styles.chip} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.btnRow}>
            <a className={styles.btn} href={`mailto:${profile.email}`}>
              <span>邮箱 | EMAIL ME&nbsp;&nbsp;&nbsp;{profile.email}</span>
              <span>↗</span>
            </a>
            <a className={styles.btn} href="#">
              <span>联系方式 | WeChat&nbsp;&nbsp;&nbsp;{profile.phone}</span>
              <span>↗</span>
            </a>
            <a className={styles.btn} href="#">
              <span>点击下载 PDF 简历</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
