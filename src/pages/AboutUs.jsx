import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const AboutUs = () => {
    return (
        <div className="p-6 text-center font-sans " style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}>
            <h1 className="text-7xl font-black my-10 py-36 bg-cover bg-no-repeat bg-[url('/who.png')] ">Who We Are</h1>
            <h2 className="font-bold text-gray-600 text-4xl mb-6">Our Group</h2>
            <p className="text-2xl text-gray-700 mb-10 mx-[5%]">
                KS Associates offers expert consultation and guidance at no cost. Our service charges are applicable only after the successful transfer of shares to your demat account. Backed by years of experience, our team comprises seasoned professionals with deep expertise in the capital market industry.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false }} className="bg-yellow-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
                    <h3 className="text-3xl font-black text-gray-800 mb-4">Vision</h3>
                    <p className="text-gray-600 text-lg">
                        At KS Associates, we envision a society where every individual enjoys complete financial security and empowerment. Our goal is to lead the way in recovering lost or unclaimed shares and investments, ensuring that no rightful owner is left behind. We are committed to fostering financial justice, helping individuals reclaim their assets, and building a future where wealth is protected and accessible to all.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false }} className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
                    <h3 className="text-3xl font-black text-gray-800 mb-4">Mission</h3>
                    <p className="text-gray-600 text-lg">
                        KS Associates is dedicated to go beyond traditional recovery services. Our mission is to empower individuals and institutions to reclaim their rightful assets, paving the way for a more inclusive and secure financial future.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false }} className="bg-green-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
                    <h3 className="text-3xl font-black text-gray-800 mb-4">Goal</h3>
                    <p className="text-gray-600 text-lg">
                        At KS Associates, our primary objective is to become a trusted leader in recovering lost shares and unclaimed investments while offering robust solutions for sustained financial security. We are committed to helping investors recover their rightful assets with ease and efficiency. To meet this goal, we focus on improving our processes, extending our services to new markets, and staying informed about the latest industry developments and advancements.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
