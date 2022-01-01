import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import UIfx from "uifx";
import whoosh from "../audio/whoosh.mp3";
const beep = new UIfx(whoosh);

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <section className="p-2 mt-0 fixed w-full z-20 top-0 ">
      <nav className="  flex items-center flex-wrap px-12  shadow-xl rounded-3xl h-12 bg-gallery-50 dark:bg-ebony-clay-600 	">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4  ">
            <h1 className="text-center text-black dark:text-bright-gray-50 ">
              Vector Hamza
            </h1>
          </a>
        </Link>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className=" inline-flex p-3  rounded lg:hidden text-black dark:text-bright-gray-50 ml-auto  outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <motion.div
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.9 }}
            className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto text-center bg-gallery-50 dark:bg-ebony-clay-600 rounded-xl shadow-xl lg:shadow-none mt-5 lg:mt-0"
          >
            <Link onClick={beep.play} href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full transition duration-500 ease-in-out text-black dark:text-bright-gray-50 items-center justify-center  ">
                Home
              </a>
            </Link>
            <Link onClick={beep.play} href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full transition duration-500 ease-in-out text-black dark:text-bright-gray-50   items-center justify-center ">
                About
              </a>
            </Link>
            <Link onClick={beep.play} href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full transition duration-500 ease-in-out text-black dark:text-bright-gray-50 items-center justify-center ">
                Contact
              </a>
            </Link>
          </motion.div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
