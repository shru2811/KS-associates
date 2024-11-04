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

const InsuranceClaim = () => (
  <div style={{ background: 'linear-gradient(to bottom, #d1e7f9, #ffffff)' }}>
    <div className="service-details overflow-x-hidden container mx-auto px-4 py-8 md:py-10">
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
                            service.title === "Insurance Claim" ? "bg-blue-200 shadow-xl" : "bg-white"
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
            viewport={{once: true}} className="text-3xl md:text-5xl text-[#2A2665] font-bold mb-4">Unclaimed Insurance</motion.h1>
      
      {/* First Section */}
      <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
        <img src="/ins.png" className="rounded-full h-40 md:h-56 mx-auto md:mx-0" alt="Insurance" />
        <div className="text-lg md:text-xl">
          <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">What are unclaimed insurance policies?</span>
          <p>Unclaimed insurance policies refer to insurance policies that have not been claimed or accessed by the policyholders or beneficiaries for an extended period. These policies may include life insurance, health insurance, property insurance, or other types of insurance contracts. Typically, unclaimed insurance policies arise when policyholders or beneficiaries are unaware of the existence of the policy, have forgotten about it, or have not taken the necessary steps to claim the benefits owed to them. Unclaimed insurance policies may contain valuable benefits, including death benefits, maturity benefits, surrender value, dividends, or accrued interest. However, if these policies remain unclaimed for an extended period, the insurance company may classify them as dormant or abandoned.</p>
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg md:text-xl">
          <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">How do insurance policies become unclaimed?</span>
          <p>Insurance policies can become unclaimed for various reasons, including:</p>
          <div className="mt-4 space-y-4">
            <p><span className="font-bold">Lack of Awareness: </span>Policyholders may forget about their insurance policies or be unaware of their existence, especially if the policies were purchased a long time ago or if the policy documents were misplaced.</p>
            <p><span className="font-bold">Policyholder's Demise: </span>In cases where the policyholder passes away and the beneficiaries are unaware of the insurance policy or unable to locate the relevant documents, the policy benefits may remain unclaimed.</p>
            <p><span className="font-bold">Policy Lapse: </span>If policyholders fail to pay their premiums on time and allow their policies to lapse, they may lose access to the benefits associated with the policy, resulting in unclaimed policy proceeds.</p>
            <p><span className="font-bold">Change of Contact Details: </span>If policyholders fail to update their contact details with the insurance company, they may miss out on important communication regarding their policies.</p>
            <p><span className="font-bold">Relocation or Migration: </span>Policyholders who move to a new location or migrate to another country may fail to notify their insurance company of their new address.</p>
            <p><span className="font-bold">Unclaimed Death Benefits: </span>In some instances, beneficiaries may be unaware of their entitlement to insurance proceeds following the death of the insured.</p>
          </div>
        </div>
        <img src="/in1.png" className="rounded-2xl h-40 md:h-48" alt="Insurance Info" />
      </motion.div>

      {/* Additional Sections */}
      {/* Each section follows similar pattern - stack on mobile, side-by-side on desktop */}
      <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
        <img src="/ins2.png" className="rounded-full h-40 md:h-56 mx-auto md:mx-0" alt="Insurance Check" />
        <div className="text-lg md:text-xl">
          <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">How can I check if I have any unclaimed insurance policies?</span>
          <p>To check if you have any unclaimed insurance policies, start by reviewing your personal records, including old policy documents and premium payment receipts. Currently, insurance companies are mandated by the IRDAI to display the database of unclaimed insurance on their website. A search can be made on the respective website of the company by entering multiple criteria like Name, DOB, Policy No, etc. These steps will help you identify any unclaimed policies and take the necessary actions to recover any benefits owed to you.</p>
        </div>
      </motion.div>

      {/* Document Requirements Section */}
      <motion.div 
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="text-lg md:text-xl">
          <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">What documents are required to claim unclaimed insurance policies?</span>
          <p>The documents required to claim unclaimed insurance policies may vary depending on the insurance company's policies and the IRDAI guidelines. However, common documents typically include:</p>
          <div className="mt-4 space-y-2">
            <p className="font-bold">Policy documents</p>
            <p className="font-bold">Proof of identity (such as Aadhar card, passport, or driver's license)</p>
            <p className="font-bold">Proof of address</p>
            <p className="font-bold">Death certificate of the policyholder (if applicable)</p>
            <p className="font-bold">Legal heirship certificate / Succession Certificate (if the policyholder has passed away and no nominee is mentioned)</p>
          </div>
        </div>
        <img src="/ins3.png" className="h-40 md:h-52 rounded-xl" alt="Documents Required" />
      </motion.div>

      {/* Final Sections */}
      <motion.div 
            variants={fadeIn("left",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}} className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-10">
        <img src="/ins4.png" className="rounded-full h-40 md:h-56 mx-auto md:mx-0" alt="Claim Process" />
        <div className="text-lg md:text-xl">
          <span className="text-xl md:text-2xl font-bold text-[#85bf4b] block mb-4">Can unclaimed insurance policies be claimed after the policyholder's demise?</span>
          <p>Yes, unclaimed insurance policies can typically be claimed after the policyholder's demise. In the event of the policyholder's death, the beneficiaries named in the policy or the legal heirs may claim the benefits of the policy by submitting the required documents to the insurance company. These documents usually include the death certificate of the policyholder, the original policy document, proof of identity and relationship of the beneficiary/legal heir, and any other documents specified by the insurer. Once the necessary documentation is provided and verified, the insurance company will process the claim and disburse the benefits to the rightful beneficiaries or legal heirs.</p>
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

export default InsuranceClaim;