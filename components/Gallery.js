import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { artworks } from "../data/artworks";
import UIfx from "uifx";
import whoosh from "../audio/whoosh.mp3";
let easing = [0.6, -0.05, 0.01, 0.99];

const beep = new UIfx(whoosh);

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Gallery = (props) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="container pt-10 mx-auto px-8">
      <section className="relative pt-10 ">
        <motion.div
          variants={stagger}
          className="container  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-4 xl:grid-cols-4  gap-4 pb-4 sm:place-items-center"
        >
          {artworks.map((artwork) => (
            <Link
              onClick={beep.play}
              key={artwork.id}
              href="/artworks/[id]"
              as={`/artworks/${artwork.id}`}
              passHref
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="z-10 mb-10 lg:mb-0"
              >
                <motion.div
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
                    <Image
                      className="rounded-3xl"
                      src={`https://artworksbyhamza.netlify.app/${artwork.id}.png`}
                      alt={artwork.details}
                      width={450}
                      height={450}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  </motion.div>
);

export default Gallery;
