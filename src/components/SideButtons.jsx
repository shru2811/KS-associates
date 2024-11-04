import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SideButtons = () => {
  return (
    <>
      {/* Contact Us Button */}
      <button className="fixed right-0 top-52 bg-[#50bfbf] text-white text-sm md:text-lg py-2 px-3 md:py-3 md:px-4 rounded-lg transform -rotate-90 translate-x-6 md:translate-x-8 z-50">
        <NavLink to="./contact">
          Contact Us
        </NavLink>
      </button>

      {/* WhatsApp Button */}
      <button className="fixed right-5 md:right-6 top-80 md:top-96 bg-[#85bf4b] text-white text-sm md:text-lg py-2 px-2 md:py-3 md:px-3 rounded-lg transform -rotate-90 translate-x-6 md:translate-x-8 z-50">
        <a href="https://api.whatsapp.com/send/?phone=917905749502&text&type=phone_number&app_absent=0">
          <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 md:w-6 md:h-6 text-white rotate-90" />
        </a>
      </button>
    </>
  );
};

export default SideButtons;
