"use client";

import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./servicesData";
import styles from "./Services.module.css";

export default function Services() {
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
    <section className={styles.services} ref={sectionRef}>
      <span className={styles.blobOne} aria-hidden="true" />
      <span className={styles.blobTwo} aria-hidden="true" />

      <div className={styles.header}>
        <span className={`${styles.tag} ${isVisible ? styles.fadeUp : ""}`}>
          Our Expertise
        </span>
        <h2 className={`${styles.heading} ${isVisible ? styles.fadeUp : ""}`}>
          Crafting Quality Ropes for Every Need.
        </h2>
      </div>

      <div className={styles.grid}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            isVisible={isVisible}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}