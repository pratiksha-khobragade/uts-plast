"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Strong Ropes.{" "}
          <span className={styles.accent}>Reliable Performance.</span>
          <br />
          Built for Every Challenge.
        </h1>

        <p className={styles.subheading}>
          We combine cutting-edge technology with innovative manufacturing
          processes to create high-performance products that set new standards
          for quality, reliability, and durability.
        </p>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Crafting quality ropes.</h3>

          <p className={styles.cardDesc}>
            Established with a vision to redefine the standards of plastic
            product manufacturing, UTS PLAST has consistently delivered
            solutions that exceed expectations.
          </p>
        </div>

        <button type="button" className={styles.cta}>
          Explore More
        </button>
      </div>
    </section>
  );
}