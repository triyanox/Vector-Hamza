import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Angelina from "../assets/Angelina.png"
import Anne from "../assets/Anne.png"
import Darkwomen from "../assets/Darkwomen.png"
import Earth from "../assets/Earth.png"
import Foxboy from "../assets/Foxboy.png"
import Got from "../assets/Got.png"
import Heisenberg from "../assets/Heisenberg.png"
import Moon from "../assets/Moon.png"
import Mrrobot from "../assets/Mrrobot.png"
import Raven from "../assets/Raven.png"
import Sun from "../assets/Sun.png"
import Saturn from "../assets/Suturn.png"
import Link from 'next/link'



const Gallery = () => {
    return (
        <div className="container pt-10 mx-auto px-8">
            <section className="relative pt-10 ">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-6 pb-8">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 shdow-lg dark:shadow-white">
                        <Link href='https://www.instagram.com/p/CW6YAkXsefe/' passHref >

                            <Image className="rounded-3xl" src={Earth} alt="Art" height={500} width={500} />

                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CW9ECnusl0Z/' passHref >
                            <Image className="rounded-3xl" src={Moon} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CW33EXdMqA4/' passHref >
                            <Image className="rounded-3xl" src={Sun} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CXHXHC5smwo/' passHref >
                            <Image className="rounded-3xl" src={Saturn} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>


                </div>

                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-6 pb-8">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 shdow-lg dark:shadow-white">
                        <Link href='https://www.instagram.com/p/CRAC8IfAntn/' passHref >
                            <Image className="rounded-3xl" src={Angelina} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CScTzZKsfw2/' passHref >
                            <Image className="rounded-3xl" src={Darkwomen} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CQrXsGAAfxs/' passHref >
                            <Image className="rounded-3xl" src={Mrrobot} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CSSWcdUMAPy/' passHref >
                            <Image className="rounded-3xl" src={Got} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                </div>
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-6 pb-8">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CRm1UKyANi8/' passHref >
                            <Image className="rounded-3xl" src={Anne} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CXUFG-mFOVh/' passHref >
                            <Image className="rounded-3xl" src={Raven} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CXO_pv5scRb/' passHref >
                            <Image className="rounded-3xl" src={Foxboy} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} whileTap={{ scale: .9 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Link href='https://www.instagram.com/p/CRJzwERACSV/' passHref >
                            <Image className="rounded-3xl" src={Heisenberg} alt="Art" height={500} width={500} />
                        </Link>
                    </motion.div>

                </div>
            </section >
        </div >
    )
}
export default Gallery;