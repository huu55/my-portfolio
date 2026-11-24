import Image from "next/image";
import styles from "./site.module.css";

export default function Hero() {
  return (
    <section
      className={`${styles.section} ${styles.hero}`}
      id="top"
      data-rail-theme="light"
    >
      <div className={styles.heroBg}>
        <Image
          src="/figma/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
      <div className={styles.heroFade} />
    </section>
  );
}
