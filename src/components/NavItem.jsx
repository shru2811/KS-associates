import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ text, hasDropdown = false, dropdownItems = [] }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    // Close dropdown if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div 
            className="relative" 
            ref={dropdownRef}
        >
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-white transition-transform duration-300 transform hover:scale-105 hover:shadow hover:shadow-2xl hover:underline hover:underline-offset-4"
            >
                <span>{text}</span>
                {hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                )}
            </button>

            {/* Dropdown Menu */}
            {hasDropdown && isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                    {dropdownItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.linkPath}
                            className="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 w-full"
                            onClick={() => setDropdownOpen(false)} // Close dropdown on navigation
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavItem;
