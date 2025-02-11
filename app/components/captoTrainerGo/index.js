import React from "react";
import Vector from "../../assets/Vector.png";
import Capno from "../../assets/Capno.png";
import group1 from "../../assets/Group-1.png";
import group3 from "../../assets/Group-3.png";
import Image from "next/image";

const highlights = [
  "Identify and correct dysfunctional breathing habits.",
  "Understand the triggers and motivations behind your habits.",
  "Optimize your respiration for health, focus, and performance.",
];

const CapnoTrainer = () => {
  return (
    <div className="lg:flex items-center justify-center max-w-[1400px] ">
      <div className="w-full relative lg:px-12 ">
        <div className="w-full justify-center flex max-xl:flex-col items-center max-md:my-10">
          <div className="xl:w-[42%] w-full">
            <div className="zero-content flex flex-col items-start text-[#008080] text-center sm:text-left">
              <h2 className="zero-content-h2 max-md:text-[30px] text-[40px] whitespace-nowrap font-bold flex items-center font-spectral justify-between md:gap-5">
                <span>
                  <span className="text-[45px]">W</span>HAT{" "}
                  <span className="text-[45px]">I</span>S THE
                </span>
                <Image src={group3} alt="...group" />
              </h2>
              <h2 className="text-[50px] max-md:text-[30px] font-bold font-spectral whitespace-wrap">
                <span className="text-[55px]">C</span>APNO
                <span className="text-[55px]">T</span>RAINER<sup>®</sup> GO?
              </h2>
            </div>

            <p className="zero-para md:w-[99%] text-[#3C3C3C] text-[15px] max-lg:text-[16px] text-center font-nunito leading-normal font-normal sm:text-left my-5">
              The CapnoTrainer
              <sup>®</sup>
              GO isn’t just a tool—it’s your personal gateway to a healthier,
              more aligned you. Using advanced{" "}
              <span className="font-bold text-[#008080]">
                capnography technology
              </span>
              , it provides real-time insights into your breathing behavior by
              measuring CO2 levels and visualizing your breathing patterns.
              Paired with a guided learning framework, it empowers you to:
            </p>
          </div>
          <div className="relative w-full lg:w-[65.5%] lg:mt-[100px] max-lg:flex max-lg:items-center max-lg:justify-center">
            <Image src={Capno} alt="...capno" />
            <div className="absolute top-[50%] -translate-y-[50%] whitespace-nowrap md:left-[265px] lg:flex flex-col items-start space-y-4 hidden lg:w-[75%]">
              {highlights?.map((highlight, index) => (
                <div key={index} className="highlight">
                  <Image src={Vector} alt="Vector" />
                  <p className="highlight_para">{highlight}</p>
                </div>
              ))}
              <Image
                src={group1}
                alt="...vector"
                className="xl:ml-40 lg:ml-36  ml-auto"
              />
            </div>
          </div>
          <div className="max-lg:flex max-lg:flex-col items-start space-y-4 hidden">
            {highlights?.map((highlight, index) => (
              <div key={index} className="highlight">
                <Image src={Vector} alt="Vector" />
                <p className="highlight_para">{highlight}</p>
              </div>
            ))}
            <Image src={group1} alt="...vector" className="ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapnoTrainer;
