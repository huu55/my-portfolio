"use client";

import { useEffect, useState } from "react";
import styles from "./site.module.css";
import { profile, nav } from "../content";

type Theme = "light" | "dark" | "hidden" | "lime";

export default function FixedSidebar() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rail-theme]")
    );
    if (sections.length === 0) return;

    // 以视口垂直中线为判定线：哪个 section 跨过中线即为当前 section
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = entry.target.getAttribute("data-rail-theme") as Theme;
            if (t) setTheme(t);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const themeClass =
    theme === "light"
      ? styles.light
      : theme === "dark"
      ? styles.dark
      : theme === "lime"
      ? styles.lime
      : styles.railHidden;

  return (
    <aside className={`${styles.fixedRail} ${themeClass}`} aria-hidden={theme === "hidden"}>
      <div className={styles.railInner}>
        <h1 className={styles.name}>{profile.name}</h1>
        <div className={styles.roles}>
          {profile.roles.map((r) => (
            <div key={r}>/ {r}</div>
          ))}
        </div>
        <div className={styles.location}>{profile.location}</div>

        <nav className={styles.nav}>
          {nav.map((n) => (
            <a key={n.id} className={styles.navLink} href={`#${n.id}`}>
              [ {n.label} ↗ ]
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <div className={styles.contactHead}>EMAIL / Number</div>
          <div className={styles.contactBody}>
            {profile.phone}
            <br />
            {profile.email}
          </div>
        </div>
      </div>
    </aside>
  );
}
