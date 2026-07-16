"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.css";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <Image
          src="/images/logo/hero/ropes.png"
          alt="Coiled marine rope on a boat deck"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={`${styles.bgImage} ${isLoaded ? styles.bgZoom : ""}`}
        />
        <div className={styles.overlay} />
        <div className={styles.vignette} />
      </div>

      <div className={styles.content}>
        <span className={`${styles.eyebrow} ${isLoaded ? styles.fadeIn : ""}`}>
          <span className={styles.liveDot} />
          Universal Trade Services
        </span>

        <h1 className={`${styles.heading} ${isLoaded ? styles.fadeIn : ""}`}>
          Strong Ropes. Reliable Performance.
          <br />
          Built for Every Challenge.
        </h1>

        <p className={`${styles.subtext} ${isLoaded ? styles.fadeIn : ""}`}>
          We combine cutting-edge technology with innovative manufacturing
          processes to create high-performance products that set new
          standards for quality, reliability, and durability.
        </p>

        <Link
          href="/products"
          className={`${styles.cta} ${isLoaded ? styles.fadeIn : ""}`}
        >
          <span className={styles.ctaShine} />
          Explore More
          <span className={styles.ctaIconWrap}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
          </span>
        </Link>
      </div>

      {/* <div className={`${styles.scrollCue} ${isLoaded ? styles.cueIn : ""}`}>
        <span className={styles.scrollLine} />
        <FontAwesomeIcon icon={faChevronDown} className={styles.scrollIcon} />
      </div> */}
    </section>
  );
}