"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HamburgerMenu } from "./hamburger-menu";

// Parent animation controller
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0,
    },
  },
};

// Each child animation
const childVariants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

/**
 * ==================================================
 * Main Components
 * @returns
 * ==================================================
 */
const Header = () => {
  return (
    <motion.header
      className="z-30 flex items-start justify-between px-20 py-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        variants={childVariants}
        className="text-3xl font-bold"
        whileHover={{ scale: 1.1 }}
      >
        <Link href="/">FRI ENTRÉ</Link>
      </motion.div>

      <motion.div variants={childVariants} className="text-center font-bold">
        <h1 className="flex flex-col text-[60px] leading-none font-bold">
          <span>KULTUR</span>
          <span>FESTIVALEN</span>
        </h1>
        <h2 className="text-[42px] leading-none">13-17/8 2025</h2>
      </motion.div>

      <motion.div variants={childVariants}>
        <HamburgerMenu />
      </motion.div>
    </motion.header>
  );
};

export default Header;
