import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import MainLogo from "../assets/images/MainLogo.svg";
import HomePlus from "../assets/images/HomePlus.png";
import ContactButton from "../assets/images/ContactButton.png";
import DropdownHeaderRes from "../assets/images/DropdownHeaderRes.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto">
      <div
        className="relative flex pt-[41px] md:justify-between lg:justify-between max-w-[1140px] lg:px-0 md:px-6 px-4
      mx-auto z-[2] lg:flex w-full "
      >
        {/* Main Logo */}
        <button className="relative md:flex w-[258px] h-[63px] bg-none border-none p-0 m-0 cursor-pointer">
          <img className="absolute top-0 left-0" src={MainLogo} alt="" />
        </button>

        {/* Dropdown button for smaller screens */}
        <div className="flex-1 flex justify-end lg:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-2"
            aria-expanded={isMenuOpen}
          >
            <img src={DropdownHeaderRes} alt="Dropdown Menu" />
          </button>
        </div>
        {/* Overlay hover when clicking */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-lg z-[1]" />
        )}

        {/* Conbine menu bar contact button */}
        <div className="flex">
          {/* Menu Bar */}
          {/* <div className="flex items-center w-[481px] h-[25px] mt-[17px] ml-[191px] z-10"> */}
          <div
            ref={dropdownRef}
            className={`absolute lg:relative top-full right-0 lg:top-auto items-center rounded-xl lg:px-0 px-4
         ${isMenuOpen ? "block" : "hidden"}
         space-y-8 lg:space-y-0
         lg:flex lg:items-center
         bg-white lg:w-auto
         lg:bg-transparent
         py-4 lg:py-0
         shadow-lg lg:shadow-none
         z-20`}
          >
            <button className="flex relative lg:w-full md:w-3/4 max-w-[66px] w-full mx-auto items-center bg-none border-none p-0 cursor-pointer">
              <img
                className="w-full h-full object-contain"
                src={HomePlus}
                alt=""
              />
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[55px] h-[24px] lg:ml-[45px] mx-auto font-poppins
                          text-[16px] font-medium leading-[24px] tracking-[0.1em]
                         text-left bg-none border-none p-0 cursor-pointer 
                          items-center text-[#8B8B8B] "
            >
              <p className="m-0">About</p>
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[69px] h-[24px] lg:ml-[45px] mx-auto font-poppins
       text-[16px] font-medium leading-[24px] tracking-[0.1em]
       items-center text-center bg-none border-none p-0 cursor-pointer text-[#8B8B8B]  
       "
            >
              <p className="m-0">Service</p>
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[67px] h-[24px] lg:ml-[46px] mx-auto font-poppins
       text-[16px] font-medium leading-[24px] tracking-[0.1em]
       items-center text-left bg-none border-none p-0 cursor-pointer text-[#8B8B8B]
       "
            >
              <p className="m-0">Gallery</p>
            </button>
            <button
              className="flex lg:w-full md:w-3/4 max-w-[41px] h-[24px] lg:ml-[47px] mx-auto font-poppins
         text-[16px] font-medium leading-[24px] tracking-[0.1em]
         items-center text-left bg-none border-none p-0 cursor-none text-[#8B8B8B]
       "
            >
              <p className="m-0">Blog</p>
            </button>
            {/* Contact Button */}
            <button
              className="max-w-[158px] md:flex lg:w-full h-auto lg:h-full ml-auto lg:ml-[52px] mx-auto md:justify-start bg-none
     border-none p-0 cursor-pointer items-center z-10
     "
            >
              <img src={ContactButton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
