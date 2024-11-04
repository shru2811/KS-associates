import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import NavItem from './NavItem';
import Services from './Services';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const servicesData = [
    { icon: '📄', title: 'IEPF Claim', description: 'If the dividends...', linkText: 'Read More', linkPath: '/iepf-claim' },
    { icon: '📑', title: 'Duplicate Issue of Shares', description: 'Losing important...', linkText: 'Read More', linkPath: '/duplicate-issue' },
    { icon: '📜', title: 'Transmission of Shares', description: 'When it comes to...', linkText: 'Read More', linkPath: '/transmission' },
    { icon: '🔒', title: 'Insurance Claim', description: 'Insurance amount...', linkText: 'Read More', linkPath: '/insurance-claim' },
    { icon: '📈', title: 'Mutual Fund Redemption', description: 'Mutual funds play...', linkText: 'Read More', linkPath: '/mutual-fund' },
];
  return (
    <>
      {/* Top Bar */}
      <div id="home" className="bg-[#50bfbf] text-white py-2 sm:py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-sm sm:text-md text-gray-200 font-bold text-center sm:text-left">
              Reclaim what's rightfully yours
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="flex items-center text-sm sm:text-base">
                  <Phone className="w-4 h-4 mr-2 text-gray-200 font-bold" />
                  7905749502
                </span>
                <span className='text-gray-200 font-bold text-sm sm:text-base break-all sm:break-normal'>
                  ksassociates.solutions@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#191919] shadow relative">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/logo-png.png"
                alt="Logo"
                className="h-16 w-32 sm:h-20 sm:w-40"
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ?
                <X className="h-6 w-6" /> :
                <Menu className="h-6 w-6" />
              }
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 text-xl font-semibold">
              <NavLink
                to='/'
                className='text-xl text-white transition-transform font-semibold duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl hover:underline hover:underline-offset-4'
              >
                Home
              </NavLink>
              <NavLink
                to='/about-us'
                className='text-xl text-white transition-transform font-semibold duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl hover:underline hover:underline-offset-4'
              >
                About Us
              </NavLink>
              <NavItem
                text="Services"
                destination={"services-section"}
                hasDropdown
                dropdownItems={[
                  { label: 'IEPF Claim' },
                  { label: 'Duplicate Issue of Shares' },
                  { label: ' Transmission of Shares' },
                  { label: ' Insurance Claim' },
                  { label: 'Mutual Fund Redemption' }
                ]}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-[#191919] z-50`}>
            <div className="flex flex-col space-y-4 p-4">
              <NavLink
                to='/'
                className='text-white text-lg font-semibold hover:text-[#50bfbf] transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to='/about-us'
                className='text-white text-lg font-semibold hover:text-[#50bfbf] transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <div className="text-white text-lg font-semibold">
                Services
                <div className="pl-4 mt-2 space-y-2">
                {servicesData.map((service, index) => (
                    <div key={index} className="flex flex-col items-center   text-center py-1 transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl">
                        <p className="text-gray-300 hover:text-[#50bfbf] transition-colors duration-300"><NavLink to={service.linkPath}>{service.title}</NavLink></p>
                    </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;