"use client";

import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const classes = `${styles.btn} ${styles[variant] || ""} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}