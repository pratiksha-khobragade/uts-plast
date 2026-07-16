"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { topBarSocials, topBarContact } from "./navData";
import Navbar from "./Navbar";
import Logo from "../ui/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <p className={styles.welcomeText}>
          Welcome to <span className={styles.brandHighlight}>UTS Plast</span>
        </p>

        <div className={styles.socials}>
          {topBarSocials.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              aria-label={social.label}
              className={styles.socialIcon}
            >
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.mainRow}>
        <div className={styles.logoWrap}>
          <Logo />
        </div>

        <Navbar />

        <div className={styles.contactCol}>
          <a
            href={`mailto:${topBarContact.email}`}
            className={styles.contactPill}
          >
            <span className={styles.contactIconWrap}>
              <FontAwesomeIcon icon={topBarContact.emailIcon} />
            </span>
            {topBarContact.email}
          </a>

          <a
            href={`tel:${topBarContact.phone}`}
            className={styles.contactPill}
          >
            <span className={styles.contactIconWrap}>
              <FontAwesomeIcon icon={topBarContact.phoneIcon} />
            </span>
            {topBarContact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}