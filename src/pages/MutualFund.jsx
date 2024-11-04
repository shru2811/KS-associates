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

const MutualFund = () => (
    <div style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}>
        <div className="service-details container mx-auto px-4 py-8 md:py-10">
            <motion.h2 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="text-center text-3xl md:text-5xl font-bold text-indigo-900 mb-10 md:mb-20">Our Services</motion.h2>
            
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
                            service.title === "Mutual Fund Redemption" ? "bg-blue-200 shadow-xl" : "bg-white"
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
            viewport={{once: true}}  className="text-3xl md:text-5xl text-[#2A2665] font-bold mb-4">Mutual Funds</motion.h1>
            
            {/* First Section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <img src="/mutual.png" className="rounded-full h-40 md:h-56 mx-auto md:mx-0" alt="Mutual Funds" />
                <div className="text-lg md:text-xl">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">What are Unclaimed Mutual Funds?</span>
                    <p>
                        Investments kept in mutual fund schemes that have not been accessed or claimed by the investor for an extended period are referred to as unclaimed mutual funds. The funds may have arrived from redemptions, dividends, or units kept in unused accounts. Mutual funds typically go unclaimed when investors neglect their assets for a variety of reasons, forget to submit updated contact information, or fail to collect dividends or redemptions. Mutual fund houses are required to lodge unclaimed cash in specified liquid funds, and claims must be resolved as soon as an investor contacts the relevant mutual fund house.
                    </p>
                </div>
            </motion.div>

            {/* Second Section */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                <div className="text-lg md:text-xl">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">How do mutual funds become unclaimed?</span>
                    <p>Mutual funds can become unclaimed due to various reasons:</p>
                    <div className="mt-4 space-y-4">
                        <p><span className="font-bold">Inactive Accounts: </span>If investors do not provide updated contact information or fail to monitor their investments, their accounts may become inactive.</p>
                        <p><span className="font-bold">Failure to Claim Dividends: </span>When dividends or distributions are declared by mutual funds, investors may fail to claim them, resulting in unclaimed amounts accumulating in their accounts.</p>
                        <p><span className="font-bold">Forgotten Investments: </span>Investors may forget about their mutual fund holdings, especially if they have not received statements or communication from the mutual fund company for an extended period.</p>
                        <p><span className="font-bold">Deceased Investors: </span>In cases where investors pass away without leaving clear instructions or beneficiaries for their mutual fund investments, the funds may become unclaimed.</p>
                    </div>
                </div>
                <img src="/mutual1.png" className="rounded-2xl h-40 md:h-48" alt="Mutual Fund Info" />
            </motion.div>

            {/* Third Section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <img src="/mutual2.png" className="rounded-full h-40 md:h-56 mx-auto md:mx-0" alt="Claim Process" />
                <div className="text-lg md:text-xl">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">How do I claim my unclaimed mutual funds?</span>
                    <p>To claim unclaimed mutual funds, investors need to follow a specific process:</p>
                    <div className="mt-4 space-y-4">
                        <p>First, investors should identify the unclaimed mutual funds by reviewing their past investment records and statements.</p>
                        <p>Next, investors must contact the respective mutual fund company or its RTA to inquire about the procedure for claiming unclaimed funds.</p>
                        <p>Investors must submit KYC details, proof of identity, address, and a claim form to claim unclaimed funds from a mutual fund company or RTA. Once verified, the funds are transferred to the investor's bank account.</p>
                        <p>The initial unclaimed amount should be given to investors for three years, including any interest collected until the end of the third year following the date of redemption or dividend payment.</p>
                    </div>
                </div>
            </motion.div>

            {/* Fourth Section */}
            <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-center">
                <div className="text-lg md:text-xl">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">What documents are required to claim unclaimed mutual funds?</span>
                    <div className="space-y-4">
                        <p><span className="font-bold">Proof of Identity (PoI): </span>This includes documents such as an Aadhar card, passport, voter ID card, or PAN card.</p>
                        <p><span className="font-bold">Proof of Address (PoA): </span>Documents like Aadhar cards, passports, voter ID cards, utility bills, or rental agreements can serve as proof of address.</p>
                        <p><span className="font-bold">Claim Form: </span>Mutual fund companies usually provide a specific claim form that investors need to fill out accurately and submit.</p>
                        <p><span className="font-bold">Legal Heirship Docs: </span>In the event of the original investor's demise, legal heirs or nominees may be required to furnish a certified copy of the death certificate, along with a legal heirship certificate issued by a competent authority if no nominee is mentioned or if the nominee is deceased.</p>
                    </div>
                </div>
                <img src="/mutual3.png" className="h-40 md:h-52 rounded-xl" alt="Required Documents" />
            </motion.div>

            {/* Fifth Section */}
            <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <img src="/mutual4.png" className="rounded-full h-40 md:h-56 mx-auto md:mx-0" alt="Deceased Owner Process" />
                <div className="text-lg md:text-xl">
                    <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">What happens to unclaimed mutual funds if the owner passes away?</span>
                    <p>Whether or not the owner of unclaimed mutual funds has designated a beneficiary will determine the procedure for claiming the funds in the event of their death.</p>
                    <div className="mt-4 space-y-4">
                        <p><span className="font-bold">With Nomination: </span>In the event that the owner has designated a beneficiary for the mutual fund investment, the beneficiary may obtain the funds by completing a claim form and providing the required paperwork, which includes the death certificate. Following document verification, the nominee will get the funds in their account from the mutual fund firm or RTA.</p>
                        <p><span className="font-bold">Without Nomination: </span>The investor's legal heirs may assert their right to the unclaimed mutual funds in the event that there is no nominee by submitting supporting documentation, including the investor's death certificate, legal heirship certificate, and KYC documents. In order to prove their claim to the investment, the legal heirs might have to go through the legal succession process.</p>
                    </div>
                </div>
            </motion.div>

            {/* Home Button */}
            <div className="mt-8 md:mt-16 flex justify-center">
                <div className="bg-[#85bf4b] w-[45%] md:w-1/6 text-center px-2 py-4 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl">
                    <div className="text-3xl md:text-5xl mb-2">🏠</div>
                    <p className="text-sm md:text-md font-bold text-gray-100"><NavLink to={'/'}>Home</NavLink></p>
                </div>
            </div>
        </div>
    </div>
);

export default MutualFund;