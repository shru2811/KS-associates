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

const Transmission = () => (
    <div style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}>
        <div className="service-details container mx-auto px-4 py-6 md:py-10">
            <motion.h2 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="text-center text-3xl md:text-5xl font-bold text-indigo-900 mb-8 md:mb-20">Our Services</motion.h2>
            
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
                            service.title === "Transmission of Shares" ? "bg-blue-200 shadow-xl" : "bg-white"
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
            viewport={{once: true}}
            className="text-3xl md:text-5xl text-[#2A2665] font-bold mb-4">Transmission Of Shares</motion.h1>
            
            {/* What is Transmission section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <img src="/tran.png" className="rounded-full h-40 md:h-48 mx-auto md:mx-0" />
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">What is Transmission of Shares?</span>
                    <br />
                    The process of transferring ownership of shares from a deceased shareholder to their lawful heirs or beneficiaries following the shareholder's death is referred to as the transmission of shares. This transfer often occurs when a shareholder passes away and the shares they held need to be transferred to their heirs.
                </p>
            </motion.div>

            {/* Legal Documents section */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row justify-between gap-6">
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">What are the Legal documents needed for Transmission of shares?</span>
                    <br />
                    The legal documents needed for transmission of shares are:<br/>
                    <span className="font-bold">Legal Heir Certificate</span> (obtained from local SDM / Tehsil Office)<br/>
                    <span className="font-bold">Succession Certificate</span> (obtained from Court)<br/>
                    <span className="font-bold">Probate of Will</span> (obtained from Court)<br/>
                    <span className="font-bold">Letter of Administration</span> (obtained from Court)<br/>
                </p>
                <img src="/tran2.png" className="rounded-full h-40 md:h-48 mx-auto md:mx-0" />
            </motion.div>

            {/* Probate vs Succession section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <img src="/tran3.png" className="rounded-full h-48 md:h-56 mx-auto md:mx-0" />
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">Is the Probate of Will and Succession Certificate the same thing?</span>
                    <br />
                    No. They are not the same. When a deceased person leaves a Will, Probate is granted. When a deceased person does not leave a Will, a Succession Certificate is issued. Only the assets stated in the Will are transferred to the beneficiaries in the event of Probate. In a succession certificate, the legal heir can claim all of the deceased's assets. A beneficiary in Probate might be an individual or any entity, however a beneficiary in Succession can only be a Legal Heir, according to the Indian Succession Act, 1925.
                </p>
            </motion.div>

            {/* Legal Heir Certificate section */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">How to get Legal Heir Certificate?</span>
                    <br />
                    Legal Heir Certificate is issued by the Revenue dept of the district where the shareholder was deceased. In case of metropolitan cities, it is issued by the SDM office and in case of non-metropolitan cities, Legal Heir Certificate is issued by the Tehsil office. In some regions, it is also known as Surviving Member Certificate.
                </p>
                <img src="/tran4.png" className="h-44 md:h-52 rounded-xl mx-auto md:mx-0" />
            </motion.div>

            {/* Succession Certificate section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
                <img src="/tran5.png" className="rounded-full h-48 md:h-56 mx-auto md:mx-0" />
                <p className="text-lg md:text-xl my-4 md:my-6">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b]">How to get Succession certificate?</span>
                    <br />
                    To obtain a Succession Certificate, you have to file a petition before the appropriate Civil Court where the deceased person last resided. It is required only when the deceased person has not left a will behind. The applicant has to prepare a petition, verify and sign the same and submit it to the district judge in the appropriate jurisdiction after paying the appropriate court fees. The Court summons the concerned parties for verification of the claim. Once the genuineness of the claim is confirmed, the court grants the Succession Certificate.
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

export default Transmission;