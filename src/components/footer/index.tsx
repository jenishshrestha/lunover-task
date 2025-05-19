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
    <footer className="mt-[5.813rem] mb-[4.125rem] px-6">
      <div className="md: container mx-auto flex w-full flex-col justify-between gap-8 border-t border-white/20 py-10 md:flex-row">
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
          className="ml-[1.563rem] text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="font-button mb-2 text-[1.063rem] leading-none font-bold tracking-[−0.005em]">
            Följ oss
          </p>
          <div className="flex justify-center gap-4">
            <MagneticButton className="hover:text-primary transition-colors">
              <Link
                href="https://www.instagram.com/kulturfestivalensthlm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="svgIcon text-2xl lg:text-[2.063rem]" />
              </Link>
            </MagneticButton>
            <MagneticButton className="hover:text-primary transition-colors">
              <Link
                href="https://www.facebook.com/Kulturfestivalensthlm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="svgIcon text-2xl lg:text-[2rem]" />
              </Link>
            </MagneticButton>
            <MagneticButton className="hover:text-primary transition-colors">
              <Link
                href="https://www.tiktok.com/@kulturfestivalensthlm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tiktok className="svgIcon text-2xl lg:text-[1.938rem]" />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          className="font-button text-center text-[1.063rem] tracking-[−0.005em] md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="leading-none font-bold uppercase">KONTAKT</p>
          <Link
            href="mailto:kulturfestivalen@stockholm.se"
            className="font-400 leading-[1.5]"
          >
            kulturfestivalen@stockholm.se
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
