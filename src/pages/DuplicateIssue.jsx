import { Link } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const servicesData = [
    { icon: '📄', title: 'IEPF Claim', description: 'If the dividends...', linkText: 'Read More', linkPath: '/iepf-claim' },
    { icon: '📑', title: 'Duplicate Issue of Shares', description: 'Losing important...', linkText: 'Read More', linkPath: '/duplicate-issue' },
    { icon: '📜', title: 'Transmission of Shares', description: 'When it comes to...', linkText: 'Read More', linkPath: '/transmission' },
    { icon: '🔒', title: 'Insurance Claim', description: 'Insurance amount...', linkText: 'Read More', linkPath: '/insurance-claim' },
    { icon: '📈', title: 'Mutual Fund Redemption', description: 'Mutual funds play...', linkText: 'Read More', linkPath: '/mutual-fund' },
];

const DuplicateIssue = () => (
    <div style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}>
        <div className="service-details container mx-auto px-4 py-6 md:py-10">
            <motion.h2 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}className="text-center text-3xl md:text-5xl font-bold text-indigo-900 mb-8 md:mb-20">Our Services</motion.h2>
            
            {/* Services Icons Grid */}
            <motion.div 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true}}
                className="icon-list flex justify-center mb-8 md:mb-12 flex-wrap gap-4"
            >
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center w-[45%] md:w-1/6 text-center px-2 py-4 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl ${
                            service.title === "Duplicate Issue of Shares" ? "bg-blue-200 shadow-xl" : "bg-white"
                        }`}
                    >
                        <div className="text-3xl md:text-5xl mb-2">{service.icon}</div>
                        <p className="text-sm md:text-md font-bold text-black">
                            <NavLink to={service.linkPath}>{service.title}</NavLink>
                        </p>
                    </div>
                ))}
            </motion.div>

            <motion.h1 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="text-3xl md:text-5xl text-[#2A2665] font-bold mb-4">Duplicate Issuance Of Shares</motion.h1>
            
            {/* What is Duplicate Issuance section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
            className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <img src="/dup.png" className="rounded-full h-40 md:h-48 mx-auto md:mx-0" />
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">What is Duplicate Issuance of Shares?</span>
                    <br />
                    The Duplicate Issuance of Shares, also known as duplicate share certificate issuance, is a process that allows shareholders to obtain replacement share certificates for their ownership in a company when their original share certificates are lost, stolen, damaged, or have become unusable for any reason.
                </p>
            </motion.div>

            {/* Timeline section */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">How long does it take a company to issue duplicate shares?</span>
                    <br />
                    The company must issue the duplicate shares certificate within 36 working days, according to Company Law regulations. For the first 15 days following the publication of the newspaper advertisement for the loss of shares, the company will accept any objections. If all of the documentation supplied is in order, the company will issue a duplicate issue of shares within the next 21 days. However, during this procedure, the company might find discrepancies.
                </p>
                <img src="/dup1.png" className="rounded-full h-40 md:h-48 mx-auto md:mx-0" />
            </motion.div>

            {/* Police Complaint section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <img src="/dup2.png" className="rounded-full h-48 md:h-56 mx-auto md:mx-0" />
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">Do I need to file a police complaint for loss of shares?</span>
                    <br />
                    If your physical shares disappear after being stolen, being lost, or disappearing for any other cause. Then, yes, you must report the loss of the shares to the police by filing a general diary or a police complaint at the closest station.
                    For instance, if the baggage carrying the shares is lost and the shareholder, a resident of Delhi, was traveling to Hyderabad with the actual shares. So, in Hyderabad, where the shares were lost, he or she must file a police report. If the particular police station offers this option, you can also file a complaint online.
                </p>
            </motion.div>

            {/* Advertisement section */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">Is it necessary to provide an advertisement for loss of shares?</span>
                    <br />
                    It is necessary to issue an advertisement in the Lost & Found section of the newspaper in the case of lost shares. However, as per recent SEBI regulations, advt is only to be provided when the value of the shares exceeds ₹5 lacs. Furthermore, in IEPF claim instances, you must likewise advertise in the local/regional language in along with the English newspaper. The local language will be according to the regd office of the Company whose shares were lost.

                    For example, a person residing in Kolkata may have held shares in Reliance, whose registered office is in Mumbai. If that person has lost his or her Reliance shares, he or she has to publish an advertisement in English & Marathi newspapers newspaper that has circulation in Mumbai (Maharashtra).
                </p>
                <img src="/dup3.png" className="h-44 md:h-52 rounded-xl mx-auto md:mx-0" />
            </motion.div>

            {/* Physical Form section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <img src="/dup4.png" className="rounded-full h-48 md:h-56 mx-auto md:mx-0" />
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">Do we get duplicate shares in the physical form?</span>
                    <br />
                    Previously, the company issued duplicate shares to shareholders. However, according to the recent SEBI guidelines, the company must issue duplicate shares in the form of a Letter Of Confirmation (LOC). After receiving the LOC, the shareholder must deposit it with his DP (Depository Participant) for dematerialization of shares within 120 days of the LOC's issuing date.
                </p>
            </motion.div>

            {/* Home Button */}
            <div className="mx-auto bg-[#85bf4b] flex flex-col items-center w-1/2 md:w-1/6 text-center px-1 py-3 md:py-4 mt-8 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl">
                <div className="text-3xl md:text-5xl mb-2">🏠</div>
                <p className="text-sm md:text-md font-bold text-gray-100"><NavLink to={'/'}>Home</NavLink></p>
            </div>
        </div>
    </div>
);

export default DuplicateIssue;