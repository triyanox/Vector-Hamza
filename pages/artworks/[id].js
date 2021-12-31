import { motion } from "framer-motion";
import { artworks } from "../../data/artworks";
import Image from "next/image";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ThemeProvider } from "../../components/Themes";
import Background from "../../components/Background";
import Button from "../../components/Button.js";
import Link from "next/link";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

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

export const getStaticProps = async ({ params }) => {
  const artworksList = artworks.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      artwork: artworksList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = artworks.map((artwork) => ({
    params: { id: artwork.id },
  }));

  return { paths, fallback: false };
};

export default ({ artwork }) => (
  <Layout
    pageTitle="Vector Hamza"
    description="Vector Art Designer"
    siteName="Vector Hamza"
  >
    <ThemeProvider>
      <Background>
        <Header />
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="container flex flex-col items-center justify-center mx-auto mt-36">
            <motion.div
              className=" flex flex-1 content-center"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  className="rounded-3xl mx-auto"
                  src={`https://artworksbyhamza.netlify.app/${artwork.id}.png`}
                  alt={artwork.details}
                  width={400}
                  height={400}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex  flex-col items-center mx-auto container px-5 py-12 text-black dark:text-bright-gray-500"
              variants={stagger}
            >
              <motion.div
                variants={fadeInUp}
                className="text-lg underline decoration-pumpkin font-bold  mb-4"
              >
                <span>{`Collection Of : ${artwork.Category}`}</span>
              </motion.div>
              <motion.h1
                className="text-lg text-pumpkin font-bold  mb-4"
                variants={fadeInUp}
              >{`Name of The Artwork : ${artwork.name}`}</motion.h1>
              <motion.p
                className="text-center px-auto"
                variants={fadeInUp}
              >{`This Artwork is made by Hamza Kbida and it's a ${artwork.details}`}</motion.p>

              <motion.div
                className="mt-4 mb-4 justify-center content-center"
                variants={fadeInUp}
              >
                <Link
                  key={artwork.id}
                  href={`https://www.instagram.com/p/${artwork.image}`}
                  passHref
                >
                  <button className="flex mt-8 btn btn-white  mx-auto shadow-xl rounded-md justify-center items-center">
                    <h1>View On Instagram</h1>

                    <a className="ml-3 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <Button />
        <Footer />
      </Background>
    </ThemeProvider>
  </Layout>
);
