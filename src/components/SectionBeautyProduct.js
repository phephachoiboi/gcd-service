import React from "react";
import "../App.css";
import Animation3Product from "../assets/images/Animation3Product.png";
import AppointmentButton from "../assets/images/AppointmentButton.png";

const SectionBeautyProduct = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div
          className="flex lg:flex-row flex-col max-w-[1137px] w-full h-auto mt-[92px] mx-auto lg:justify-between
  lg:items-start items-center"
        >
          {/* Left side Illustration 1 image  */}
          <div className="max-w-[475px] w-full h-auto mt-0">
            <img src={Animation3Product} alt="" />
          </div>
          {/* Right side title text */}
          <div className="flex flex-col max-w-[475px] w-full h-auto lg:mt-[29px] mt-8 lg:px-0 md:px-6 px-4 lg:items-start items-center lg:text-left text-center">
            <div className="max-w-[125px] w-full h-[20px] font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE]">
              <p className="m-0">Beauty Product</p>
            </div>
            <div
              className="max-w-[411px] w-full h-[103px] font-poppins font-semibold lg:text-[36px] text-[28px] mt-[12px]
       lg:leading-[45px] leading-[38px] text-[#091156] "
            >
              <p className="m-0">
                We present quality
                <br />
                beauty products
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
            <button className=" h-auto cursor-pointer lg:mt-[9px] md:mt-10 sm:mt-5 mt-16">
              <img src={AppointmentButton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionBeautyProduct;
