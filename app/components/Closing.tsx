import styles from "./site.module.css";
import { profile } from "../content";

export default function Closing() {
  return (
    <section
      className={`${styles.section} ${styles.closing}`}
      data-rail-theme="hidden"
    >
      <div className={styles.closingWrap}>
        <h2 className={styles.thanks}>
          THANKS FOR
          <br />
          WATCHING
        </h2>
        <div className={styles.closingBtns}>
          <a className={styles.btn} href={`mailto:${profile.email}`}>
            <span>邮箱 | EMAIL ME&nbsp;&nbsp;&nbsp;{profile.email}</span>
            <span>↗</span>
          </a>
          <a className={styles.btn} href="#">
            <span>联系方式 | WeChat&nbsp;&nbsp;&nbsp;{profile.phone}</span>
            <span>↗</span>
          </a>
          <a className={styles.btn} href="#top">
            <span>回到顶部 | BACK TO TOP</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </section>
  );
}
