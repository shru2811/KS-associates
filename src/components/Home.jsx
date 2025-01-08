import React from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import NavItem from './NavItem';
import Services from './Services';
import { NavLink } from 'react-router-dom';
import GoogleReviews from './GoogleReviews';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div

        className="relative min-h-[500px]" style={{ background: 'linear-gradient(to right, #a8e6e6, #c1e6a6)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
              <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A2665] leading-tight mb-8">
                India's largest and most trusted platform for recovery of shares and dividends from IEPF
              </motion.h1>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <button className="bg-[#50bfbf] text-white px-6 py-3 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl hover:bg-opacity-90">
                  <NavLink to='./contact'>
                    Contact Us
                  </NavLink>
                </button>
                <button >
                  <a
                    href="tel:7905749502"
                    className="bg-[#85bf4b] text-white px-6 py-3 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl hover:bg-opacity-90"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>

                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative flex justify-end">
              <div className="relative">
                <motion.img
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false }}
                  src="/homeImg.jpg"
                  alt="financial independence"
                  className="rounded-3xl h-96 shadow-2xl"
                />
                <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Side Button - Hidden on mobile */}
        {/* <button className="hidden lg:block fixed right-0 top-52 -translate-y-1/2 bg-[#50bfbf] text-white text-lg py-3 px-4 rounded-lg transform -rotate-90 translate-x-8 z-50">
        <NavLink to='./contact'>
                    Contact Us
                  </NavLink>
        </button>
        <button className="hidden lg:block fixed right-6 top-96 -translate-y-1/2 bg-[#85bf4b] text-white text-lg py-3 px-3 rounded-lg transform -rotate-90 translate-x-8 z-50">
        <a href="https://api.whatsapp.com/send/?phone=917905749502&text&type=phone_number&app_absent=0">
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-white rotate-90" />
        </a>
        </button> */}
      </div>
      {/* Services */}
      <Services />
      {/*google reviews  */}
      <GoogleReviews />
    </div>
  );
};

export default Home;