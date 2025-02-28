import React from "react";

export default function FooterLogoAndDescription(props) {
  return (
    <>
      <div className="w-full md:w-[20%] flex flex-col gap-8 items-center  ">
        <img
          className="mix-blend-multiply   h-[95px]"
          src="logo.svg"
          alt="alkway logo"
        ></img>
        <p className="applyClassicaProFont text-[12px] text-justify leading-[23px] 2xl:leading-[30px] text-[#5C727D] 2xl:text-[16px]">
          Discover a world of exclusive properties, seamless buying experiences,
          and smart investments tailored just for you. Whether you're looking
          for luxury, comfort, or the perfect investment, ALKWAY makes it happen
          effortlessly.
        </p>
      </div>
    </>
  );
}
