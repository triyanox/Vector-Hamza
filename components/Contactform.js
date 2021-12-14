
import { motion } from "framer-motion";





















const Contactform = () => {
    return (

        <section className=" py-20 pt-20 ">

            <div className="relative mt-12">
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .4
                        }
                    },
                }} >

                    <div className="flex  flex-col items-center mx-auto ">
                        <form name="contactus" method="POST" data-netlify="true" className="  flex  flex-col items-center  "   >
                            <input type="hidden" name="form-name" value="contactus" />




                            <span className="uppercase text-center mx-auto text-black dark:text-bright-gray-50 underline decoration-pumpkin ">Full Name</span>
                            <input name="cname" type="text" className="w-full text-3xl h-12  text-black  mt-2 p-2 focus:outline-none focus:shadow-outline rounded-3xl border-2 border-pumpkin"
                                required />




                            <span className="mt-8 uppercase text-center mx-auto  text-black dark:text-bright-gray-50 underline decoration-pumpkin ">Email</span>
                            <input name="cemail" type="email" className="w-full text-3xl   h-12 text-black  mt-2 p-2  focus:outline-none focus:shadow-outline rounded-3xl border-2 border-pumpkin"
                                required />





                            <span className="mt-8 uppercase text-center mx-auto  text-black dark:text-bright-gray-50  underline decoration-pumpkin ">Message</span>
                            <textarea name="cmessage"
                                className="w-full text-3xl h-28   text-black  mt-2 p-2  focus:outline-none focus:shadow-outline rounded-3xl  border-2 border-pumpkin" required></textarea>



                            <button type="primary" htmlType="submit"
                                className="mt-8 btn btn-white  mx-auto shadow-xl rounded-md" >
                                Send A Message
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div >


        </section >

    );

};

export default Contactform;