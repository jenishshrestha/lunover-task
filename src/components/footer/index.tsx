import React from "react";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/elements/magnetic-button";
import Link from "next/link";
import Instagram from "@/assets/icon/instagram.svg";
import Facebook from "@/assets/icon/facebook.svg";
import Tiktok from "@/assets/icon/tiktok.svg";
import Stockholms from "@/assets/stockholms-stad-logotyp-vit.svg";

const Footer = () => {
  return (
    <footer className="px-6">
      <div className="container mx-auto grid grid-cols-1 gap-8 border-t border-white/20 py-12 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <Stockholms className="inline-block h-[1em] text-[59px]" />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">Följ oss</p>
          <div className="flex justify-center gap-4">
            <MagneticButton className="hover:text-primary transition-colors">
              <Link
                href="https://www.instagram.com/kulturfestivalensthlm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </MagneticButton>
            <MagneticButton className="hover:text-primary transition-colors">
              <Link
                href="https://www.facebook.com/Kulturfestivalensthlm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </MagneticButton>
            <MagneticButton className="hover:text-primary transition-colors">
              <Link
                href="https://www.tiktok.com/@kulturfestivalensthlm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tiktok className="h-6 w-6" />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 font-bold">KONTAKT</p>
          <Link href="mailto:kulturfestivalen@stockholm.se" className="text-sm">
            kulturfestivalen@stockholm.se
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
