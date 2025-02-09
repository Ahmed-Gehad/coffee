import React from 'react'
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <div className='bg-[#3F181C] text-white py-12'>
            <div className="container mx-auto grid lgl:grid-cols-[2fr_1fr] gap-10">
                {/* lgl:grid-cols-[2fr_1fr] الكود ده معناه ان الديف الاول هياخد ضعف الديف التاني  */}

                <div className='bg-[#1E1E1E] container mx-auto p-10 rounded'>
                    <motion.div
                        className=""
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: 1 % 2 === 0 ? 50 : -50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 3 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <h1 className='font-bold text-2xl text-orange-300 mb-4'>Need Help? Open a Ticket</h1>
                        <p className='py-2'>Our support team will get back to you ASAP via email.</p>

                        <form className='mt-5'>
                            <div className="grid grid-cols-1 sml:grid-cols-2 sml:gap-10">
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="text-sm mb-2 text-white   font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        required
                                        className="w-full my-3 bg-[#3F181C] p-3 rounded-md text-white text-sm 
                                                focus:ring-2 focus:ring-orange-400 outline-none transition
                                                duration-700"
                                        type="text"
                                        placeholder="Enter Your Name" />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="text-sm mb-2 text-white font-medium">
                                        Your Email
                                    </label>
                                    <input
                                        id="email"
                                        required
                                        className="w-full my-3 bg-[#3F181C] p-3 rounded-md text-white text-sm 
                                                focus:ring-2 focus:ring-orange-400 outline-none transition
                                                duration-700"
                                        type="email"
                                        placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    id="message"
                                    required
                                    rows="5"
                                    placeholder="Write your message here... "
                                    className="w-full p-4 rounded-lg bg-[#3F181C] text-white focus:outline-none
                                            focus:ring-2 focus:ring-orange-500 transition duration-700">
                                </textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#F97316] hover:bg-[#1E1E1E] hover:text-[#F97316] rounded-full text-white font-semibold  
                                        shadow-md   focus:outline-none focus:ring-2
                                        focus:ring-orange-500 transition duration-700">
                                Submit Ticket
                            </button>
                        </form>
                    </motion.div>
                </div>



                <div className='bg-[#1E1E1E] container mx-auto p-10 rounded'>
                    <motion.div
                        className=""
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: 2 % 2 === 0 ? 50 : -50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 3 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <h1 className='font-bold text-2xl text-orange-300 mb-4'>Subscribe to receive future updates</h1>
                        <p className='py-2'>Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae
                            ornare massa quis lectus.</p>
                        <hr className='mt-3' />
                        <form className='mt-5'>
                            <div className="">
                                <div className="mb-4">

                                    <input
                                        id="name"
                                        required
                                        className="w-full my-3 bg-[#3F181C] p-3 rounded-md text-white text-sm 
                                                focus:ring-2 focus:ring-orange-400 outline-none transition
                                                duration-700"
                                        type="text"
                                        placeholder="Enter Your Name" />
                                </div>

                                <div className="mb-4">

                                    <input
                                        id="email"
                                        required
                                        className="w-full my-3 bg-[#3F181C] p-3 rounded-md text-white text-sm 
                                                focus:ring-2 focus:ring-orange-400 outline-none transition
                                                duration-700"
                                        type="email"
                                        placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-2 bg-[#F97316]  hover:bg-[#1E1E1E] hover:text-[#F97316] rounded-md text-white font-semibold  
                                        shadow-md   focus:outline-none focus:ring-2
                                        focus:ring-orange-500 transition duration-700">
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Contact