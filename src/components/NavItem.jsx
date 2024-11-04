import React, { useState } from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import Services from './Services';
import GoogleReviews from './GoogleReviews';

const NavItem = ({ text, destination, hasDropdown = false, dropdownItems = [] }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Scroll to the specified destination when the button is clicked
    const handleClick = () => {
        if (destination) {
            const element = document.getElementById(destination) || document.querySelector(`.${destination}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div
            className="relative group"
            onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
            onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
        >
            <button
                onClick={handleClick}
                className="flex items-center space-x-1 text-white transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl hover:underline hover:underline-offset-4 "
            >
                <span>{text}</span>
                {hasDropdown && (
                    <ChevronDown className="w-4 h-4" onClick={toggleDropdown} />
                )}
            </button>

            {/* Dropdown Menu */}
            {hasDropdown && isDropdownOpen && (
                <div
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50" // Add z-50 here
                    style={{ top: '100%' }} // Optional: This ensures the dropdown appears directly below the button
                >
                    {dropdownItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const target = document.getElementById(item.destination);
                                if (target) {
                                    target.scrollIntoView({ behavior: 'smooth' });
                                    setDropdownOpen(false); // Close the dropdown after selecting
                                }
                            }}
                            className="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 w-full"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}

        </div>
    );
};

export default NavItem;
