"use client";

import { motion, Variants } from "framer-motion";
import LinkButton from "@/app/components/LinkButton";

const headingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 1 } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.4, duration: 0.8 } },
};

export function Hero() {
  return (
    <motion.section
      className="text-center space-y-6 py-20 px-6 md:px-12"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold leading-tight"
        variants={headingVariants}
      >
        Ghavasieh Brothers Except Arsham
      </motion.h1>
      <motion.p
        className="text-muted-foreground max-w-2xl mx-auto text-lg"
        variants={paragraphVariants}
      >
        Ghavasieh Brothers Except Arsham (GBEA) doesn&apos;t have any other
        branch!
      </motion.p>
      <motion.div className="pt-6" variants={buttonVariants}>
        <LinkButton href="/contact">Let&apos;s Work Together</LinkButton>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
