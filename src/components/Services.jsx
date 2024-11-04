import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import { NavLink } from 'react-router-dom';

const servicesData = [
  { icon: '📄', title: 'IEPF Claim', description: 'If the dividends declared by the company remained unclaimed for seven consecutive years or more...', linkText: 'Read More', linkPath: '/iepf-claim' },
  { icon: '📑', title: 'Duplicate Issue of Shares', description: 'Losing important documents is not uncommon. The paper could get lost, stolen or damaged due to natural...', linkText: 'Read More', linkPath: '/duplicate-issue' },
  { icon: '📜', title: 'Transmission of Shares', description: 'When it comes to transmitting shares from deceased shareholders to legal heir(s)...', linkText: 'Read More', linkPath: '/transmission' },
  { icon: '🔒', title: 'Insurance Claim', description: 'Insurance amount becomes unclaimed due to many reason like Mis-selling of policy, rejection of death claims...', linkText: 'Read More', linkPath: '/insurance-claim' },
  { icon: '📈', title: 'Mutual Fund Redemption', description: 'Mutual funds plays a vital role in investment portfolios. If the mutual funds have been unclaimed for over 1...', linkText: 'Read More', linkPath: '/mutual-fund' },
];

const ServiceCard = ({ icon, title, description, linkText, linkPath }) => (
  <div className="service-card border border-gray-200 rounded-lg shadow-lg px-6 py-6 bg-gradient-to-br from-[#80bf4b] to-white transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl md:w-96 h-56 max-w-md mx-auto flex flex-col justify-between">
    <div className="flex items-start space-x-4">
      <div className="icon text-3xl text-orange-500">{icon}</div>
      <div className="flex-1">
        <h3 className="title text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
        <p className="description text-gray-600 text-lg line-clamp-2">{description}</p>
      </div>
    </div>
    <Link to={linkPath} className="link text-[#50bfbf] font-semibold hover:underline hover:underline-offset-4 mt-4">
      {linkText}
    </Link>
  </div>
);

const Services = () => (
  <section
  
  id="services-section" className="py-16 bg-no-repeat bg-cover bg-[url('/bgPattern.png')] min-h-screen">
    <motion.h2 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: true}}
    className="text-center text-5xl font-bold text-indigo-900 mb-20">Our Services</motion.h2>
    
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: true}}
    className="icon-list flex justify-center mb-12 flex-wrap px-4">
      {servicesData.map((service, index) => (
        <div key={index} className="flex flex-col items-center w-1/3 md:w-1/6 bg-white mx-2 mb-4 md:mb-0 text-center px-1 py-4 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl">
          <div className="text-4xl md:text-5xl mb-2">{service.icon}</div>
          <NavLink to={service.linkPath}>{service.title}</NavLink>
        </div>
      ))}
    </motion.div>

    <div 
    className="md:hidden flex flex-col items-center gap-8 px-4">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>

    <div className="hidden md:block relative w-full h-[800px] px-6">
      <motion.div 
      variants={fadeIn("right",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
      className="absolute top-0 left-48">
        <ServiceCard {...servicesData[0]} />
      </motion.div>

      <motion.div 
      variants={fadeIn("left",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
      className="absolute top-0 right-48">
        <ServiceCard {...servicesData[1]} />
      </motion.div>

      <div 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ServiceCard {...servicesData[2]} />
      </div>

      <motion.div 
      variants={fadeIn("right",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
      className="absolute bottom-0 left-48">
        <ServiceCard {...servicesData[3]} />
      </motion.div>

      <motion.div 
      variants={fadeIn("left",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: true}}
      className="absolute bottom-0 right-48">
        <ServiceCard {...servicesData[4]} />
      </motion.div>
    </div>
  </section>
);

export default Services;