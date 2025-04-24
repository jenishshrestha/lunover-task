"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/elements/magnetic-button";
import Instagram from "@/assets/icon/instagram.svg";
import Facebook from "@/assets/icon/facebook.svg";
import Tiktok from "@/assets/icon/tiktok.svg";

type MenuItem = {
  name: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { name: "Om festivalen", href: "/om-festivalen/" },
  { name: "Nyheter", href: "/nyheter/" },
  { name: "Festivalen genom tiderna", href: "/festivalen-genom-tiderna/" },
  { name: "Festivalens områden", href: "/omraden/" },
  { name: "Frågor & Svar", href: "/fragor-svar/" },
];

/**
 * ======================================================
 * Main Componenets
 * @returns
 * ======================================================
 */
export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Hamburger Button */}
      <MagneticButton className="relative z-50 rounded-full">
        <span
          onClick={toggleMenu}
          className="flex h-15 w-15 flex-col items-center justify-center gap-1.5 rounded-full bg-black p-3 shadow-lg focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-0.5 w-6 bg-white"
          />
        </span>
      </MagneticButton>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95"
          >
            <nav className="flex w-full max-w-md flex-col items-center">
              <ul className="w-full space-y-6 px-8 text-center">
                {menuItems.map((item) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className={cn(
                        "group hover:text-primary relative inline-block text-4xl font-bold text-white transition-colors duration-300",
                        pathname === item.href && "text-primary",
                      )}
                    >
                      {item.name}
                      <span className="bg-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex gap-6"
            >
              <Link
                href="https://www.instagram.com/kulturfestivalensthlm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="svgIcon hover:text-primary text-xl transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/Kulturfestivalensthlm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="svgIcon hover:text-primary text-xl transition-colors" />
              </Link>
              <Link
                href="https://www.tiktok.com/@kulturfestivalensthlm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tiktok className="svgIcon hover:text-primary text-xl transition-colors" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
