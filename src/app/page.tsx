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
  },
  { title: "Nyheter", image: "/assets/SG20221009-DSC02592-710x480-1.jpg" },
  {
    title: "Festivalens områden",
    image: "/assets/Karta_beskuren-710x480-1.jpg",
  },
  {
    title: "Frågor och svar",
    image: "/assets/ST20221009-DSC03777-710x480-1.jpg",
  },
  {
    title: "UNG Kulturfestival",
    image: "/assets/GAT20221008-DSC01651-710x480-1.jpg",
  },
  {
    title: "Partner och sponsorer",
    image: "/assets/NB20221008-DSC01634-710x480-1.jpg",
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
      {/* Hero Section */}
      <motion.section
        className="relative aspect-2/1"
        ref={heroRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
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
          className="absolute bottom-0 left-0 mb-[-1px] h-[472px] w-[819px] overflow-hidden"
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
          className="mb-12 text-3xl font-normal tracking-tighter md:text-7xl"
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
        >
          <Link href="#">
            <Image
              src="/assets/events.png"
              width={800}
              height={472}
              alt=""
              className="mx-auto mt-25"
            />
          </Link>
        </motion.div>
      </section>

      {/* Festival Cards */}

      <section className="px-4 py-24 text-center">
        <motion.h2
          className="mb-16 text-2xl leading-[0.96] font-normal md:text-[40px]"
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
              <Link href="#" className="block h-full w-full">
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
                <h3 className="bg-background absolute bottom-4 left-4 translate-y-4 px-2.5 text-[28px] leading-[1.3] font-bold tracking-[-0.5] text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0 group-hover:opacity-100">
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
