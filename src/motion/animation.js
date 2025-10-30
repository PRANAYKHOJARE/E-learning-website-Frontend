// Stagger container: animates child elements sequentially with a delay between each.
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1, // reverses order on exit
    },
  },
};

// Fade-in with blur
export const fadeIn = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(8px)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

// Fade-in-up (slide + fade)
export const fadeInUp = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    filter: "blur(8px)",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
