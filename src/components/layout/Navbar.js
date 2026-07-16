"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navLinks, topBarContact } from "./navData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({ opacity: 0 });
  const linkRefs = useRef([]);
  const pathname = usePathname();

  const activeIndex = navLinks.findIndex((link) => link.url === pathname);

  const moveHighlight = (index) => {
    const el = linkRefs.current[index];
    if (!el) return;
    setHighlightStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
    });
  };

  useEffect(() => {
    if (activeIndex >= 0) {
      moveHighlight(activeIndex);
    } else {
      setHighlightStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname, activeIndex]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={styles.navPill}>
        <span className={styles.highlight} style={highlightStyle} />

        {navLinks.map((link, index) => (
          <Link
            key={link.id}
            href={link.url}
            ref={(el) => (linkRefs.current[index] = el)}
            className={`${styles.navLink} ${
              pathname === link.url ? styles.activeLink : ""
            }`}
            onMouseEnter={() => moveHighlight(index)}
            onMouseLeave={() => moveHighlight(activeIndex >= 0 ? activeIndex : -1)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        className={styles.mobileToggle}
        onClick={() => setIsMobileOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMobileOpen ? faXmark : faBars} />
      </button>

      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileList}>
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={styles.mobileItem}
              style={{ transitionDelay: isMobileOpen ? `${index * 60}ms` : "0ms" }}
            >
              <Link
                href={link.url}
                className={`${styles.mobileLink} ${
                  pathname === link.url ? styles.mobileActiveLink : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileContact}>
          <a href={`mailto:${topBarContact.email}`} className={styles.mobileContactLink}>
            <FontAwesomeIcon icon={topBarContact.emailIcon} />
            {topBarContact.email}
          </a>
          <a href={`tel:${topBarContact.phone}`} className={styles.mobileContactLink}>
            <FontAwesomeIcon icon={topBarContact.phoneIcon} />
            {topBarContact.phone}
          </a>
        </div>
      </div>

      {isMobileOpen && (
        <div className={styles.backdrop} onClick={() => setIsMobileOpen(false)} />
      )}
    </>
  );
}