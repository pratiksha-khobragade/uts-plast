"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { industriesData } from "./industriesData";
import styles from "./Industries.module.css";

const cardLayout = [
  { left: 40, top: 140, branchEnd: [160, 140] },
  { left: 300, top: 180, branchEnd: [420, 180] },
  { left: 560, top: 120, branchEnd: [680, 120] },
  { left: 820, top: 170, branchEnd: [940, 170] },
];

const trunkStart = [550, 0];
const splitPoint = [550, 70];

function branchPath(end) {
  const midX = (splitPoint[0] + end[0]) / 2;
  return `M${splitPoint[0]},${splitPoint[1]} C${midX},${splitPoint[1] + 40} ${
    end[0] - (end[0] - splitPoint[0]) * 0.4
  },${end[1] - 30} ${end[0]},${end[1]}`;
}

export default function Industries() {
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
    <section className={styles.industries} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={`${styles.eyebrow} ${isVisible ? styles.fadeUp : ""}`}>
            Who We Serve
          </span>
          <h2 className={`${styles.heading} ${isVisible ? styles.fadeUp : ""}`}>
            One Rope, Many Strands
          </h2>
          <p className={`${styles.subtext} ${isVisible ? styles.fadeUp : ""}`}>
            We supply high-quality ropes to a wide range of industries,
            including marine, construction, agriculture, transportation,
            safety &amp; rescue, and sports.
          </p>
        </div>

        {/* Desktop: branching rope layout */}
        <div className={styles.fanWrap}>
          <svg
            className={styles.ropeSvg}
            viewBox="0 0 1100 560"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Trunk */}
            <path
              className={`${styles.ropeCore} ${isVisible ? styles.drawIn : ""}`}
              d={`M${trunkStart[0]},${trunkStart[1]} L${splitPoint[0]},${splitPoint[1]}`}
            />
            <path
              className={`${styles.ropeTwistA} ${isVisible ? styles.drawIn : ""}`}
              d={`M${trunkStart[0]},${trunkStart[1]} L${splitPoint[0]},${splitPoint[1]}`}
            />
            <path
              className={`${styles.ropeTwistB} ${isVisible ? styles.drawIn : ""}`}
              d={`M${trunkStart[0]},${trunkStart[1]} L${splitPoint[0]},${splitPoint[1]}`}
            />

            {/* Branches */}
            {cardLayout.map((card, index) => (
              <g key={index}>
                <path
                  className={`${styles.ropeCore} ${isVisible ? styles.drawIn : ""}`}
                  style={{ transitionDelay: `${0.35 + index * 0.15}s` }}
                  d={branchPath(card.branchEnd)}
                />
                <path
                  className={`${styles.ropeTwistA} ${isVisible ? styles.drawIn : ""}`}
                  style={{ transitionDelay: `${0.35 + index * 0.15}s` }}
                  d={branchPath(card.branchEnd)}
                />
                <path
                  className={`${styles.ropeTwistB} ${isVisible ? styles.drawIn : ""}`}
                  style={{ transitionDelay: `${0.35 + index * 0.15}s` }}
                  d={branchPath(card.branchEnd)}
                />
              </g>
            ))}
          </svg>

          {industriesData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.fanCard} ${isVisible ? styles.fanCardIn : ""}`}
              style={{
                left: `${(cardLayout[index].left / 1100) * 100}%`,
                top: `${cardLayout[index].top}px`,
                transitionDelay: `${0.7 + index * 0.15}s`,
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="240px"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />

              <span className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.cardIconWrap}>
                <FontAwesomeIcon icon={item.icon} className={styles.cardIcon} />
              </span>

              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardStat}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: simple stacked fallback */}
        <div className={styles.mobileList}>
          {industriesData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.mobileCard} ${isVisible ? styles.fanCardIn : ""}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <span className={styles.mobileConnector} aria-hidden="true" />
              <div className={styles.mobileImageWrap}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay} />
                <span className={styles.cardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.cardIconWrap}>
                  <FontAwesomeIcon icon={item.icon} className={styles.cardIcon} />
                </span>
              </div>
              <div className={styles.mobileText}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardStat}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}