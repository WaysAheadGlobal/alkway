import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "./footerLogo/facebook.svg";
import instagramIcon from "./footerLogo/instagram.svg";
import linkedInIcon from "./footerLogo/linkedin.svg";
export default function TeamAndPolicies() {
  return (
    <div className="w-[40%]  md:w-auto  md:mt-5">
      <div>
        <p className="applyArethusaPro text-[17px] mb-3 2xl:text-[24px] leading-[32px]">
          Team and policies
        </p>
      </div>
      <div className="flex flex-col gap-2 applyClassicaProFont text-[#6D737A]  text-[12px] 2xl:text-[16px]">
        <Link>Terms of services</Link>
        <Link>Privacy Policy</Link>
        <Link>FAQ</Link>
        <div className="flex gap-[10px] mt-1">
          <a href="#" alt="facebook link">
            <img className="h-[40px] w-[40px]" src={facebookIcon} alt=""></img>
          </a>
          <a href="#" alt="linked link">
            <img className="h-[40px] w-[40px]" src={linkedInIcon} alt=""></img>
          </a>
          <a href="#" alt="instagram link">
            <img className="h-[40px] w-[40px]" src={instagramIcon} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}
