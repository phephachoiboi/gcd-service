import React from "react";
import "../App.css";
import Animation2Skin from "../assets/images/Animation2Skin.png";
import AppointmentButton from "../assets/images/AppointmentButton.png";

const SectionSkinTreatment = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div
          className="flex lg:flex-row flex-col max-w-[1137px] w-full h-auto mt-[92px] mx-auto lg:justify-between
  lg:items-start items-center"
        >
          {/* Left side for title text */}
          <div className="flex flex-col max-w-[475px] w-full h-auto lg:mt-[29px] mt-8 lg:px-0 md:px-6 px-4 lg:items-start items-center lg:text-left text-center">
            <div className="max-w-[167px] w-full h-[20px] font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE]">
              <p className="m-0">Skin Treatements</p>
            </div>
            <div
              className="max-w-[411px] w-full h-[103px] font-poppins font-semibold lg:text-[36px] text-[28px] mt-[12px]
         lg:leading-[45px] leading-[38px] text-[#091156] "
            >
              <p className="m-0">
                Skin care and
                <br />
                treatment by expert
              </p>
            </div>
            <div className="max-w-[475px] w-full h-[87px] font-poppins font-normal text-[16px] leading-[24px] text-[#8B8B8B] tracking-[0.1em]">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Elit, quam suscipit purus donec
                <br />
                amet. Egestas volutpat facilisi eu libero.
              </p>
            </div>
            <button className="h-auto cursor-pointer lg:mt-[9px] md:mt-10 sm:mt-5 mt-16">
              <img src={AppointmentButton} alt="" />
            </button>
          </div>
          {/* Right side for picture */}
          <div className="max-w-[475px] w-full h-auto lg:mt-0 md:mt-5 mt-[90px]">
            <img src={Animation2Skin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionSkinTreatment;
