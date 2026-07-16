// Shared Framer Motion variants used across the site.
// Keep every header/menu animation defined here so timing stays consistent.

export const fadeDown = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: "100%", transition: { duration: 0.35, ease: [0.4, 0, 1, 1] } },
};

export const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const mobileLinkItem = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const searchVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: 260, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { width: 0, opacity: 0, transition: { duration: 0.25 } },
};