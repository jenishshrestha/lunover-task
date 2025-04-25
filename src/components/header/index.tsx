"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HamburgerMenu } from "./hamburger-menu";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

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
 * ===========================================================
 * Header Component
 * @returns
 * ===========================================================
 */
const Header = () => {
  const { visible } = useScrollDirection();
  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-30 flex flex-row items-start justify-between px-4 py-6 transition-transform duration-500 md:px-10 md:py-8 lg:px-20 lg:py-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        translateY: visible ? 0 : -100,
      }}
    >
      {/* Logo */}
      <motion.div
        variants={childVariants}
        whileHover={{ scale: 1.1 }}
        className="text-xl font-bold md:text-2xl lg:text-3xl"
      >
        <Link href="/">FRI ENTRÉ</Link>
      </motion.div>

      {/* Hamburger (mobile first) */}
      <motion.div variants={childVariants} className="">
        <HamburgerMenu />
      </motion.div>
    </motion.header>
  );
};

export default Header;
