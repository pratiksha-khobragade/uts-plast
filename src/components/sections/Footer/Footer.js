"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { socialLinks, companyLinks, contactInfo } from "./footerData";
import styles from "./Footer.module.css";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.footer} ref={footerRef}>
      <span className={styles.blobOne} aria-hidden="true" />
      <span className={styles.blobTwo} aria-hidden="true" />

      <div className={styles.cta}>
        <div className={`${styles.ctaText} ${isVisible ? styles.fadeUp : ""}`}>
          <h2 className={styles.ctaHeading}>Ready to work with us?</h2>
          <p className={styles.ctaSubtext}>
            Join us to experience cutting-edge industrial solutions that
            drive innovation, lasting success.
          </p>
        </div>

        <button className={`${styles.ctaBadge} ${isVisible ? styles.badgeIn : ""}`} aria-label="Contact Now">
          <svg viewBox="0 0 100 100" className={styles.badgeText}>
            <defs>
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Contact Now - Contact Now -
              </textPath>
            </text>
          </svg>
          <span className={styles.badgeIconWrap}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.badgeIcon} />
          </span>
        </button>
      </div>

      <span className={styles.divider} />

      <div className={`${styles.glassPanel} ${isVisible ? styles.panelIn : ""}`}>
        <div className={`${styles.brandCol} ${isVisible ? styles.colIn : ""}`}>
          <img
            src="https://utsplast.com/assets/images/uts-plast-logo.png"
            alt="UTS Plast Logo"
            className={styles.footerLogo}
          />
          <p className={styles.brandText}>
            Delivering strength, reliability, and performance in every
            strand, trusted across marine, industrial, and agricultural
            sectors.
          </p>

          <div className={styles.socials}>
            {socialLinks.map(function renderSocial(social) {
              return (
                <a key={social.id} href={social.url} aria-label={social.label} className={styles.socialIcon}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              );
            })}
          </div>
        </div>

        <div className={`${styles.linkCol} ${isVisible ? styles.colIn : ""}`} style={{ transitionDelay: "0.15s" }}>
          <h3 className={styles.colTitle}>Company</h3>
          <ul className={styles.linkList}>
            {companyLinks.map(function renderLink(link) {
              return (
                <li key={link.id}>
                  <a href={link.url} className={styles.link}>{link.label}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`${styles.linkCol} ${isVisible ? styles.colIn : ""}`} style={{ transitionDelay: "0.3s" }}>
          <h3 className={styles.colTitle}>Contact Info</h3>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>Address</p>
              <p className={styles.contactValue}>{contactInfo.address}</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>Email</p>
              <p className={styles.contactValue}>{contactInfo.email}</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.contactIcon} />
            <div>
              <p className={styles.contactLabel}>Phone</p>
              <p className={styles.contactValue}>{contactInfo.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          Copyright (c) {new Date().getFullYear()} UTS Plast. All Rights Reserved. | Developed by{" "}
          <a href="https://dpinfosystem.in/" className={styles.devLink} target="_blank" rel="noopener noreferrer">
            DP Info System
          </a>
        </p>
      </div>
    </footer>
  );
}