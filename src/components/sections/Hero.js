import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Universal Trade Services
          </span>

          <h1 className={styles.title}>
          <span>Strong Ropes.</span>
          <span>Reliable Performance.</span>
          <span>Built for Every Challenge.</span>
          </h1>  

          <p className={styles.subtitle}>
            We combine cutting-edge technology with innovative manufacturing
            processes to create high-performance products that set new
            standards for quality, reliability, and durability.
          </p>

          <Link href="/products" className={styles.exploreBtn}>
            Explore More
            <span className={styles.exploreIcon}>
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/background-new.png"
              alt="Coiled rope on a boat deck, connected by a length of blue rope"
              fill
              sizes="(min-width: 992px) 46vw, 90vw"
              className={styles.img}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}