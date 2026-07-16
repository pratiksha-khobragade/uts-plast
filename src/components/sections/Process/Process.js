"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { processData } from "./processData";
import styles from "./Process.module.css";

export default function Process() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.process} ref={sectionRef}>
      <div className={styles.header}>
        <span className={`${styles.eyebrow} ${isVisible ? styles.fadeUp : ""}`}>
          How It&apos;s Made
        </span>
        <h2 className={`${styles.heading} ${isVisible ? styles.fadeUp : ""}`}>
          From Raw Fiber to
          <br />
          Field-Ready Strength
        </h2>
      </div>

      <div className={styles.timeline}>
        <span
          className={`${styles.timelineLine} ${isVisible ? styles.lineGrow : ""}`}
          aria-hidden="true"
        />

        {processData.map((step, index) => (
          <div
            key={step.id}
            className={`${styles.step} ${isVisible ? styles.stepIn : ""}`}
            style={{ transitionDelay: `${index * 180}ms` }}
          >
           <div
  className={`${styles.circle} ${
    step.filled ? styles.circleFilled : styles.circleOutline
  }`}
>
  <FontAwesomeIcon icon={step.icon} className={styles.circleIcon} />
  <span className={styles.orbit}>
    <span className={styles.circleDot} />
  </span>
</div>

            <span className={styles.stepNumber}>{step.number}</span>

            <div className={styles.textBlock}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}