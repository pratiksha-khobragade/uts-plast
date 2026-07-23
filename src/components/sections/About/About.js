"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./About.module.css";

const checklistItems = [
  {
    id: 1,
    title: "Trusted Manufacturer",
    description:
      "Years of experience crafting durable, high-performance ropes trusted across marine, industrial, and agricultural sectors.",
  },
  {
    id: 2,
    title: "Quality Assurance",
    description:
      "Every rope undergoes rigorous load testing and quality checks, ensuring strength and reliability in every strand.",
  },
];

export default function About() {
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
    <section className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <div
          className={`${styles.infoCard} ${isVisible ? styles.cardIn : ""}`}
        >
          <svg
            className={styles.decorLines}
            viewBox="0 0 400 500"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M -20,120 C 100,80 120,180 240,140 C 340,110 360,220 420,190"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
            />
            <path
              d="M -20,150 C 100,110 120,210 240,170 C 340,140 360,250 420,220"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1.5"
            />
            <path
              d="M -20,400 C 100,440 140,360 240,410 C 320,450 360,380 420,410"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="1.5"
            />
          </svg>

          {checklistItems.map((item, index) => (
            <div key={item.id} className={styles.checklistItem}>
              <span className={styles.checkIcon}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>

              {index < checklistItems.length - 1 && (
                <span className={styles.itemDivider} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.rightCol}>
          <div className={`${styles.headingCol} ${isVisible ? styles.headingIn : ""}`}>
            <h2 className={styles.heading}>
              Delivering the best quality in
              <br />
              <span className={styles.underlineWord}>rope manufacturing</span>
            </h2>
          </div>

          <div className={`${styles.imageWrap} ${isVisible ? styles.imageIn : ""}`}>
            <Image
              src="https://images.pexels.com/photos/5022683/pexels-photo-5022683.jpeg"
              alt="UTS Plast manufacturing team at work"
              fill
              sizes="(min-width: 900px) 70vw, 100vw"
              className={styles.image}
            />
            <div className={styles.imageOverlay} />

          </div>
        </div>
      </div>
    </section>
  );
}