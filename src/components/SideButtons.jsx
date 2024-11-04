import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleReviews from './GoogleReviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SideButtons=()=>{
return(
    <>
         <button className="hidden lg:block fixed right-0 top-52 -translate-y-1/2 bg-[#50bfbf] text-white text-lg py-3 px-4 rounded-lg transform -rotate-90 translate-x-8 z-50">
        <NavLink to='./contact'>
                    Contact Us
                  </NavLink>
        </button>
        <button className="hidden lg:block fixed right-6 top-96 -translate-y-1/2 bg-[#85bf4b] text-white text-lg py-3 px-3 rounded-lg transform -rotate-90 translate-x-8 z-50">
        <a href="https://api.whatsapp.com/send/?phone=917905749502&text&type=phone_number&app_absent=0">
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-white rotate-90" />
        </a>
        </button>
    </>
)
}

export default SideButtons;