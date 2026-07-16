"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { spoolsData } from "./durabilityData";
import styles from "./Durability.module.css";

export default function Durability() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const marqueeSpools = [...spoolsData, ...spoolsData];

  return (
    <section className={styles.durability} ref={sectionRef}>
      <div className={styles.overlay} />
      <FontAwesomeIcon icon={faAnchor} className={styles.watermark} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span
            className={`${styles.eyebrow} ${isVisible ? styles.fadeUp : ""}`}
          >
            UTS PLAST
          </span>

          <h2
            className={`${styles.heading} ${isVisible ? styles.fadeUp : ""}`}
          >
            Built to Withstand the
            <br />
            <span className={styles.bold}>Toughest Conditions</span>
          </h2>

          <p
            className={`${styles.subtext} ${isVisible ? styles.fadeUp : ""}`}
          >
            Safety. Reliability. Confidence.
          </p>

          <button
            className={`${styles.cta} ${isVisible ? styles.fadeUp : ""}`}
          >
            Explore More
            <span className={styles.ctaIconWrap}>
              <FontAwesomeIcon icon={faArrowRight} className={styles.ctaIcon} />
            </span>
          </button>
        </div>

        <div className={`${styles.badge} ${isVisible ? styles.badgeIn : ""}`}>
          <p className={styles.badgeTitle}>Universal Trade Services</p>
          <span className={styles.badgeDivider} />
          <p className={styles.badgeSub}>
            Customer Satisfaction Is Our Motto
          </p>
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {marqueeSpools.map((spool, index) => (
            <div key={`${spool.id}-${index}`} className={styles.spool}>
              <Image
                src={spool.src}
                alt={spool.label}
                fill
                sizes="130px"
                className={styles.spoolImg}
              />
              <span className={styles.spoolShine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}