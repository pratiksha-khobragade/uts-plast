"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { statsData } from "./statsData";
import { useCountUp } from "./useCountUp";
import styles from "./WhyChooseUs.module.css";

function StatCard({ stat, isVisible, index }) {
  const count = useCountUp(stat.end, isVisible, 2000, stat.decimals);
  const subCount = useCountUp(
    stat.subEnd || 0,
    isVisible,
    2400,
    stat.subDecimals || 0
  );

  return (
    <div
      className={`${styles.card} ${isVisible ? styles.cardIn : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={styles.iconWrap}>
        <span className={styles.pulse} />
        <span className={styles.ring} />
        <span className={styles.ringSecondary} />
        <FontAwesomeIcon icon={stat.icon} className={styles.icon} />
      </div>

      <div className={styles.textWrap}>
        <p className={styles.number}>
          {stat.prefix}
          {count}
          {stat.suffix}
        </p>
        <p className={styles.label}>{stat.label}</p>

        {stat.subEnd && (
          <p className={styles.subLabel}>
            {subCount}
            {stat.subSuffix} {stat.subLabel}
          </p>
        )}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.whyChooseUs} ref={sectionRef}>
      <h2 className={`${styles.heading} ${isVisible ? styles.fadeUp : ""}`}>
        Why Choose Us
      </h2>

      <div className={styles.grid}>
        {statsData.map((stat, index) => (
          <div className={styles.itemWrap} key={stat.id}>
            <StatCard stat={stat} isVisible={isVisible} index={index} />
            {index < statsData.length - 1 && (
              <span className={styles.divider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}