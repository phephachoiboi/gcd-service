import React from "react";
import "../App.css";
import BgGroupSectionSlogan from "../assets/images/BgGroupSectionSlogan.png";
import PlayButtonSectionSlogan from "../assets/images/PlayButtonSectionSlogan.png";

const SectionSlogan = () => {
  return (
    <div
      className="relative max-w-[1440px] h-[529px] mt-[130px] w-full mx-auto bg-cover object-cover z-[0]"
      style={{
        backgroundImage: `url(${BgGroupSectionSlogan})`,
      }}
    >
      <div className="w-full lg:px-0 md:px-6 px-4">
        <div className="w-full">
          <div className="max-w-[1440px] w-full h-auto mx-auto lg:mt-[0px] md:mt-[100px] mt-[80px]">
            <div className="flex xl:flex-row flex-col lg:mt-[182px] xl:ml-[150px] xl:mx-0 mx-auto">
              {/* Left side for text part */}
              <div className="max-w-[732px] w-full h-auto xl:text-left text-center xl:mx-0 mx-auto">
                <div className="max-w-[732px] w-full h-[97px] font-poppins font-semibold sm:text-[36px] text-[30px] sm:leading-[45px] leading-[38px] text-[#FFFFFF]">
                  <p className="m-0">
                    Best responsibility and service
                    <br />
                    for our customers
                  </p>
                </div>
                <div className="w-full h-[56px] md:mt-[12px] mt-12 lg:ml-[1px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0.1em] text-[#CACACA]">
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    <br />
                    aliquam, purus sit amet luctus venenatis
                  </p>
                </div>
              </div>
              {/* Right side for button */}
              <button className="h-auto cursor-pointer sm:mt-0 md:mt-10 mt-16 xl:mx-0 mx-auto">
                <img src={PlayButtonSectionSlogan} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionSlogan;
