import React from "react";
import gym from "../../assets/capnowithgym1.png";
import group2 from "../../assets/Group-2.png";
import group from "../../assets/Group.png";
import Image from "next/image";

const Differece = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:items-center gap-5 max-md:mt-20 relative md:my-32 my-10 max-w-[1235px] mx-auto">
      <Image
        src={group}
        alt="...group"
        className="absolute top-0 left-0 lg:w-[200px]"
      />

      <div className="w-[35%] max-lg:w-full">
        <Image src={gym} alt="...gym" className="w-[full]" />
      </div>

      {/* Text and Other Content */}
      <div className="w-[65%] max-lg:w-full">
        <h2 className="diffTheCapnotrainer text-start max-md:text-[26px] max-lg:text-center">
          What Makes the CapnoTrainer<sup>®</sup> go Different?
        </h2>
        <div className="diff_para font-nunito flex items-center max-md:flex-col max-md:text-[16px]">
          <p className="lg:max-w-[528px] my-4 max-lg:text-center">
            Unlike traditional breathing tools that focus on shallow techniques,
            the CapnoTrainer<sup>®</sup> GO goes deeper. It integrates{" "}
            <span className="text-[#008080] font-bold">
              psychophysiology, behavioral analysis, and cutting-edge technology
            </span>{" "}
            to provide a complete understanding of your breath’s role in health
            and performance.
          </p>
        </div>
        <div className="w-full flex justify-end mb-5 lg:mt-[-40px] lg:ml-[-60px]">
          <Image src={group2} alt="...group2" className="w-[232px]" />
        </div>
        <div
          className="lg:absolute bottom-10 left-[32%] max-w-[900px] lg:bottom-[30px]"
          style={{
            boxShadow:
              "0px 542.169px 151.451px 0px rgba(0, 0, 0, 0.00), 0px 347.446px 138.724px 0px rgba(0, 0, 0, 0.01), 0px 194.723px 117.088px 0px rgba(0, 0, 0, 0.05), 0px 86.543px 86.543px 0px rgba(0, 0, 0, 0.09), 0px 21.636px 47.09px 0px rgba(0, 0, 0, 0.10)",
          }}
        >
          <p
            className="text-[23px] p-5 max-lg:text-center shadow-xl bg-white rounded-[10px] text-[#008080] font-nunito"
            style={{
              fontWeight: 800,
            }}
          >
            “Breathing is behavior. And behavior can be changed. The
            CapnoTrainer<sup>®</sup> helps you edit, optimize, and own your
            breath for life.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Differece;
