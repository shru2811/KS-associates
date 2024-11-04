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

const IEPFClaim = () => (
    <div style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}>
        <div className="service-details container mx-auto px-4 py-6 sm:py-10">
            <motion.h2 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false}}
                className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 mb-10 lg:mb-20"
            >
                Our Services
            </motion.h2>
            
            {/* Services Icons Grid */}
            <motion.div 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false}}
                className="icon-list flex justify-center mb-8 md:mb-12 flex-wrap gap-4"
            >
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center w-[45%] md:w-1/6 text-center px-2 py-4 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl ${
                            service.title === "IEPF Claim" ? "bg-blue-200 shadow-xl" : "bg-white"
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
                viewport={{once: false}}  
                className="text-3xl sm:text-4xl lg:text-5xl text-[#2A2665] font-bold mb-4"
            >
                IEPF Claim
            </motion.h1>
            
            {/* Content Sections */}
            <motion.div 
                variants={fadeIn("left",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false}}
                className='mt-8 lg:mt-16 flex flex-col lg:flex-row gap-6 lg:gap-10'
            >
                <img src="/iepf.png" className='rounded-full w-full lg:w-1/2 h-auto object-cover' alt="IEPF" />
                <p className="text-lg sm:text-xl my-4 lg:my-6">
                    <span className='text-xl sm:text-2xl font-bold text-[#85bf4b]'>What is IEPF?</span>
                    <br />
                    Investor Education and Protection Fund (IEPF) is a Govt. of India Authority for promotion of investors' awareness and protection of the interests of investors. It is a Ministry of Corporate Affairs-initiated fund established under the Companies Act, 2013 designed to safeguard the interests of investors The IEPF Authority is mandated to make refunds of shares, unclaimed dividends, deposits etc. that have been transferred to IEPF.
                </p>
            </motion.div>

            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false}}
            className='mt-8 lg:mt-16 flex flex-col-reverse lg:flex-row gap-6 lg:gap-10'>
                <p className="text-lg sm:text-xl my-4 lg:my-6">
                    <span className='text-xl sm:text-2xl font-bold text-[#85bf4b]'>When do the shares & dividends get transferred to IEPF?</span>
                    <br />
                    If the dividends declared by a Company remained unclaimed for seven consecutive years or more, then the dividends as well as the pertaining shares are transferred to IEPF. In case the shares are in Demat, the dividends remain unclaimed due to the bank accounts linked with Demat, being in-operative or dormant.
                </p>
                <img src="/iepf1.png" className='rounded-xl w-full lg:w-1/2 h-auto object-cover' alt="IEPF Process" />
            </motion.div>

            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false}}
            className='mt-8 lg:mt-16 flex flex-col lg:flex-row gap-6 lg:gap-10'>
                <img src="/iepf2.jpg" className='rounded-full w-full lg:w-1/2 h-52 object-cover' alt="IEPF Claim Process" />
                <p className="text-lg sm:text-xl my-4 lg:my-6">
                    <span className='text-xl sm:text-2xl font-bold text-[#85bf4b]'>What is the process to claim shares from IEPF?</span>
                    <br />
                    To claim the shares from IEPF, the claimant must fill out Form IEPF-5 online at www.iepf.gov.in. Claimant must submit a printout of the Form together with additional documentation to the company's Nodal Officer at its registered office for verification of the claim. The nodal officer examines the documentation, validates the claim online, and submits it to IEPFA. The claim is approved by the IEPFA once all documentation has been verified. The shares are subsequently credited to the claimant's Demat account.
                </p>
            </motion.div>

            <motion.div
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false}}
            className='mt-8 lg:mt-16 flex flex-col-reverse lg:flex-row gap-6 lg:gap-10'>
                <div className="text-lg sm:text-xl my-4 lg:my-6">
                    <span className='text-xl sm:text-2xl font-bold text-[#85bf4b]'>What documents are required to be submitted with Form IEPF-5?</span>
                    <br />
                    <ul className="space-y-2 mt-4">
                        <li className="flex items-start">
                            <span className="mr-2">👉</span>
                            <span>A copy of the acknowledgement generated as a result of the online submission of e-Form IEPF - 5 with a unique serial number (SRN).</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">👉</span>
                            <span>Original Indemnity Bond with Claimant Signature</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">👉</span>
                            <span>Original advance stamped receipt with revenue stamp and signatures of claimant and witnesses</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">👉</span>
                            <span>Original matured deposit/debenture/share certificate (physical securities) or a copy of the transaction statement (demat securities)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">👉</span>
                            <span>Aadhaar Card self-attested copy</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">👉</span>
                            <span>Proof of entitlement (share certificate/Interest warrant Application No., etc.)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">👉</span>
                            <span>Cheque leaf cancelled</span>
                        </li>
                    </ul>
                </div>
                <img src="/iepf3.png" className='h-60 rounded-xl  object-cover' alt="Required Documents" />
            </motion.div>

            {/* Home Button */}
            <div className="flex justify-center mt-8 lg:mt-16">
                <div className="bg-[#85bf4b] flex flex-col items-center w-32 sm:w-48 text-center px-1 py-4 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl mb-2">🏠</div>
                    <p className="text-sm sm:text-md font-bold text-gray-100">
                        <NavLink to={'/'}>Home</NavLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default IEPFClaim;
