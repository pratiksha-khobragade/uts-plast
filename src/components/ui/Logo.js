import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logoLink} aria-label="UTS Plast — Home">
      <Image
        src="https://utsplast.com/assets/images/uts-plast-logo.png"
        alt="UTS Plast"
        width={170}
        height={50}
        priority
        className={styles.logoImg}
      />
    </Link>
  );
}