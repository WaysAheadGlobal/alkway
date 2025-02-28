import React from "react";
import { Link } from "react-router-dom";

export default function StayInLoop() {
  return (
    <div className="md:mt-5">
      <div>
        <p className="applyArethusaPro uppercase text-[17px] mb-3 2xl:text-[24px] leading-[32px]">
          Stay in loop
        </p>
      </div>
      <div className="flex flex-col gap-1 applyClassicaProFont text-[#6D737A] text-[14px] 2xl:text-[16px]">
        <Link>
          News and insight straight to your inbox.<br></br>
          We don't spam
          {/* <br></br> */}
        </Link>
        <input
          className="px-3 py-2 border-[1px] focus:outline-none text-[12px] my-1 rounded-[4px] border-[#E7E7E7] applyOpenSansFont"
          placeholder="Your Email "
        ></input>
        <button className="bg-black mt-[0.3rem] rounded-[4px] text-[14px] uppercase py-1 leading-[19.07px] font-[400] applyOpenSansFont text-white">
          submit
        </button>
        {/* <div className="flex gap-[10px] mt-1">
          <a>
            <img
              className="h-[40px] w-[40px]"
              src="footerlogo/facebook.svg"
              alt=""
            ></img>
          </a>
          <a>
            <img
              className="h-[40px] w-[40px]"
              src="footerlogo/linkedin.svg"
              alt=""
            ></img>
          </a>
          <a>
            <img
              className="h-[40px] w-[40px]"
              src="footerlogo/instagram.svg"
              alt=""
            ></img>
          </a>
        </div> */}
      </div>
    </div>
  );
}
