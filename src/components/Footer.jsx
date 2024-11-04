import React, { useState } from 'react';
import {  Instagram, Mail, MapPin, Phone, ChevronUp, MessageCircle } from 'lucide-react';
import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const today = new Date();
  const currYear = today.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#2b3147] text-white py-16 relative">
      <div className="mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-500">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <NavLink to='./' className="hover:text-[#85bf4b] transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='./about-us' className="hover:text-[#85bf4b] transition-colors">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to='./contact' className="hover:text-[#85bf4b] transition-colors">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-500">Our Services</h3>
          <ul className="space-y-3">
            <li>
              <NavLink to='./iepf-claim' className="hover:text-[#85bf4b] transition-colors">
                IEPF Claims
              </NavLink>
            </li>
            <li>
              <NavLink to='./duplicate-issue' className="hover:text-[#85bf4b] transition-colors">
                Duplicate Issue Of Shares
              </NavLink>
            </li>
            <li>
              <NavLink to='./transmission' className="hover:text-[#85bf4b] transition-colors">
                Transmission of Shares
              </NavLink>
            </li>
            <li>
              <NavLink to='./insurance-claim' className="hover:text-[#85bf4b] transition-colors">
                Insurance Claim
              </NavLink>
            </li>
            <li>
              <NavLink to='./mutual-fund' className="hover:text-[#85bf4b] transition-colors">
                Mutual Fund Redemption
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-500">Contact Us</h3>
          <h4 className="font-semibold mb-4">KS Associates Limited</h4>
          <div className="space-y-4">
            <p className="flex items-start gap-2">
              {/* <MapPin className="w-5 h-5 mt-1 flex-shrink-0" /> */}
              {/* <span>
                B-35, LGF,<br />
                South Extension Part 2,<br />
                New Delhi - 110049
              </span> */}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:7905749502" className="hover:text-[#85bf4b]">7905749502</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:ksassociates.solutions@gmail.com" className="hover:text-[#85bf4b]">
                ksassociates.solutions@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <a href="https://api.whatsapp.com/send/?phone=917905749502&text&type=phone_number&app_absent=0" target='blank' className="hover:text-[#85bf4b]">
              WhatsApp
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-6 space-y-4">
          <p className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <a href="https://www.instagram.com/ks_associates_services/" className="hover:text-[#85bf4b]">
                ks_associates_services
              </a>
            </p>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto px-6 mt-12">
        <div className="pt-6 border-t border-gray-600 text-sm text-gray-400 flex flex-wrap justify-between gap-4">
          <div className="flex gap-4">
            <NavLink to='./terms' className="hover:text-[#85bf4b] transition-colors">
              Terms & Conditions
            </NavLink>
            <span>|</span>
            <NavLink to='./privacy' className="hover:text-[#85bf4b] transition-colors">
              Privacy Policy
            </NavLink>
          </div>
          <p>Copyright © {currYear} - KS Associates. All rights reserved</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute lg:bottom-36 bottom-44 lg:right-16 right-6 bg-[#85bf4b] p-3 lg:p-4 rounded-full text-white transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl animate-bounce cursor-pointer"
      ><ChevronUp className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>
    </footer>
  );
};

export default Footer;