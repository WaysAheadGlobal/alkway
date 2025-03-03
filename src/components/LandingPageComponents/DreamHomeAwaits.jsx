import React from "react";
import firstPicture from "./pictures/firstPicture.jpg";
import secondPicture from "./pictures/secondPicture.jpg";
export default function DreamHomeAwaits(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row px-4 md:px-14 my-16 ">
        <div className="flex justify-center md:justify-self-auto gap-4 w-[100%] md:w-[50%] ">
          <img
            className="w-[150px] h-[225px] md:w-[300px] md:h-[450px] rounded-xl"
            // className="w-[428px] h-[592px] rounded-xl"
            src={firstPicture}
            alt=""
            loading="lazy"
          ></img>
          <img
            className="w-[150px] h-[225px] md:w-[300px] md:h-[450px] rounded-xl mt-16"
            // className="w-[428px] h-[592px] rounded-xl mt-16"
            src={secondPicture}
            alt=""
            loading="lazy"
          ></img>
        </div>
        <div className="w-full md:w-[50%] flex flex-col px-4 md:px-8">
          <div className="flex flex-col gap-3">
            <p className="applyClassicaProFont300 text-[9px] tracking-widest 2xl:text-[12px] text-[#52434A]">
              OUR STORY
            </p>
            <p className="applyArethusaPro500 text-[18px] tracking-tighter 2xl:text-[24px] leading-[37.4px] text-[#252A2C]">
              Your Dream Home Awaits
            </p>
          </div>

          <div className="applyClassicaProFont300 text-justify my-4 flex flex-col gap-4 text-xs 2xl:text-[16px] leading-[26px] 2xl:leading-[30px] text-[#000000] ">
            <p>
              At ALKWAY Real Estate, we redefine the way people experience the
              real estate journey. With a passion for providing exceptional
              services, we specialize in connecting individuals with luxury
              homes, high-yield investments, and exclusive properties. Our
              expert team is committed to delivering a seamless, personalized
              experience tailored to your needs—whether you're buying your first
              home, searching for an investment opportunity, or looking for a
              luxurious retreat.
            </p>
            <p>
              With years of experience in the industry, we pride ourselves on
              our deep understanding of the real estate market and our ability
              to provide clients with the best options, from affordable
              properties to upscale estates. Our goal is to help you make
              informed decisions that not only meet your immediate needs but
              also secure long-term success.
            </p>
            <p>
              At ALKWAY Real Estate, we focus on building strong, long-lasting
              relationships with our clients, offering transparency, trust, and
              integrity in every transaction. Our comprehensive approach ensures
              that your real estate goals are achieved with ease and confidence.
            </p>
            <p>
              Whether you are exploring the luxury real estate market,
              interested in smart investments, or simply looking for the ideal
              place to call home, ALKWAY Real Estate is here to guide you every
              step of the way
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
