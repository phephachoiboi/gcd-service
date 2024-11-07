import React from "react";
import "../App.css";
import OurServicePic1 from "../assets/images/OurServicePic1.png";
import OurServicePic2 from "../assets/images/OurServicePic2.png";
import OurServicePic3 from "../assets/images/OurServicePic3.png";
import OurServicePic4 from "../assets/images/OurServicePic4.png";

const SectionOurServices = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 px-4">
      <div className="w-full">
        <div className="flex flex-col max-w-[1100px] w-full h-auto mt-[125px] mx-auto ">
          {/* Upper part for title text */}
          <div className="flex flex-col max-w-[680px] w-full mx-auto text-center">
            <div className="w-full font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE] text-center">
              <p className="m-0">Our Services</p>
            </div>
            <div className="w-full h-[57px] mt-[12px] font-poppins font-semibold lg:text-[36px] text-[30px] lg:leading-[45px] leading-[38px] text-[#091156]">
              <p className="m-0">We focus on your beauty</p>
            </div>
            <div className="w-full h-[28px] sm:mt-[12px] mt-4 font-poppins font-normal text-[16px] leading-[24px] tracking-[0.1em] text-[#8B8B8B]">
              <p className="m-0">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
        {/* Lower part for image */}
        <div className="w-full max-w-[1100px] mt-[70px] mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[68px] lg:gap-x-0 gap-x-4">
            {/* First row - larger images */}
            <div className="max-w-[291px] w-full h-[254px] lg:justify-self-start justify-self-center">
              <img
                src={OurServicePic1}
                alt="Dental procedure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-[725px] w-full h-[254px] col-span-2 lg:justify-self-end">
              <img
                src={OurServicePic2}
                alt="Smiling patient"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second row - smaller images */}
            <div className="max-w-[725px] w-full h-[255px] col-span-2 ">
              <img
                src={OurServicePic3}
                alt="Dental office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex max-w-[291px] w-full h-[255px] lg:justify-self-end justify-self-center">
              <img
                src={OurServicePic4}
                alt="Dentist portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionOurServices;
