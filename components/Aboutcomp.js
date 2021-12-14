import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Sun from "../assets/bio.png"
import Link from 'next/link';


const Aboutcomp = () => {
    return (
        <section id="about" className='py-20 '>



            <div className="container flex flex-col items-center justify-center mx-auto">
                <motion.div whileInView={{ scale: 0.9 }} transition={{ duration: .7 }} className='flex flex-1 content-center'>
                    <Image className=" mb-6 w-20 h-20 items-center rounded-md shadow-xl  mx-auto " src={Sun} alt="" width="297.75" height="372" priority />
                </motion.div>


                <div className="container px-5 py-12 mx-auto text-black dark:text-bright-gray-50">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8 text-pumpkin" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-lg">Welcome to anyone who found this website
                            My name is Hamza l'm from Morocco, graphic designer, digital drawing artist ( cover book , personal portrait...). Here you can see all my artwork and refill you insperation.
                        </p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <h2 className="text-pumpkin font-bold  title-font tracking-wider text-sm">Hamza Kbida</h2>
                        <p className="text-gray-500 opacity-75">Vector Art Designer</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start pt-6">
                            <Link href='https://www.facebook.com/Hamzabida00/' passHref >
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                            </Link>

                            <Link href='https://www.instagram.com/vector.hamza.official/' passHref >
                                <a className="ml-3 text-gray-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </Link>
                        </span>
                    </div>
                </div> </div>
        </section>
    )
}
export default Aboutcomp;