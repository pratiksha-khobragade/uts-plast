"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service, isVisible, index }) {
  return (
    <div
      className={`${styles.card} ${isVisible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className={styles.cardGlow} aria-hidden="true" />

      <div className={styles.iconWrap}>
        <FontAwesomeIcon icon={service.icon} className={styles.icon} />
      </div>

      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </div>
  );
}