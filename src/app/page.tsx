"use client";
import { MagneticButton } from "@/components/elements/magnetic-button";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const cards = [
  {
    title: "Festivalen genom tiderna",
    image: "/assets/GAT20221008-DSC02234-710x480-1.jpg",
    href: "#",
  },
  {
    title: "Nyheter",
    image: "/assets/SG20221009-DSC02592-710x480-1.jpg",
    href: "#",
  },
  {
    title: "Festivalens områden",
    image: "/assets/Karta_beskuren-710x480-1.jpg",
    href: "#",
  },
  {
    title: "Frågor och svar",
    image: "/assets/ST20221009-DSC03777-710x480-1.jpg",
    href: "#",
  },
  {
    title: "UNG Kulturfestival",
    image: "/assets/GAT20221008-DSC01651-710x480-1.jpg",
    href: "#",
  },
  {
    title: "Partner och sponsorer",
    image: "/assets/NB20221008-DSC01634-710x480-1.jpg",
    href: "#",
  },
];

export default function Home() {
  const heroRef = useRef(null);

  /**
   * For video banner
   */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  /**
   * Stagger animation
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <main className="relative">
      {/* Event Title */}
      {/* Title & Date */}
      <motion.div
        className="pt-[5.688rem] pb-6 text-center font-bold md:mt-[-9px] md:py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="flex flex-col text-3xl leading-none md:text-5xl md:leading-[3rem] lg:text-[3.75rem]">
          <span className="md:leading-[1.1]">KULTUR</span>
          <span>FESTIVALEN</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-[2.625rem]">
          13-17/8 2025
        </h2>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className="relative aspect-436/241"
        ref={heroRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity }}
          >
            <Image
              src="/assets/banner.webp"
              alt="Concert scene with dramatic lighting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <MagneticButton className="flex h-20 w-20 items-center justify-center rounded-full bg-black/50">
                <Play className="ml-1 h-8 w-8 text-white" />
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Festival Info */}
      <section className="relative overflow-hidden px-4 pt-20 pb-29 text-center">
        {/* bg image */}
        <motion.div
          className="absolute bottom-0 left-0 z-[-1] mb-[-1px] h-[472px] w-[819px] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 5, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/KF_Explosion_1920x1080.png"
            width={800}
            height={472}
            alt=""
            className="absolute bottom-0 left-0"
          />
          <Image
            src="/assets/Skyline_fixad_rundad.png"
            width={627}
            height={136}
            alt=""
            className="absolute bottom-0 left-0"
          />
        </motion.div>

        <motion.h2
          className="mb-15 text-3xl leading-[0.96] font-normal tracking-[-1.5px] uppercase md:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        >
          1 festival • 5 dagar • 6 områden
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        >
          <Button size="lg">Se hela programmet här</Button>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <Link href="#">
            <Image
              src="/assets/events.png"
              width={1517}
              height={549}
              alt=""
              className="mx-auto mt-25 translate-x-[-26px]"
            />
          </Link>
        </motion.div>
      </section>

      {/* Festival Cards */}

      <section className="px-4 py-[4.813rem] text-center">
        <motion.h2
          className="mb-15 text-2xl leading-[0.96] font-normal tracking-[−0.2px] md:text-[2.5rem]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        >
          DET HÄR ÄR KULTURFESTIVALEN
        </motion.h2>

        <motion.div
          className="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index + card.title}
              className="group relative aspect-[496/377] cursor-pointer overflow-hidden"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Link href={card.href} className="block h-full w-full">
                <div className="relative h-full w-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.05]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Title */}
                <h3 className="bg-background absolute bottom-4 left-4 px-2.5 text-[18px] leading-[1.3] font-bold tracking-[-0.5] text-white transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0 group-hover:opacity-100 md:text-[24px] lg:translate-y-4 lg:text-[28px] lg:opacity-0">
                  {card.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
