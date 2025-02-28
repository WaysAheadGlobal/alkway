import React from "react";
import { Link } from "react-router-dom";
import TeamAndPolicies from "./FooterComponents/TeamAndPolicies";
import StayInLoop from "./FooterComponents/StayInLoop";
import Features from "./FooterComponents/Features";
import Company from "./FooterComponents/Company";
import FooterLogoAndDescription from "./FooterComponents/FooterLogoAndDescription";

export default function Footer(props) {
  return (
    <>
      <footer className="bg-[#E5E5E5] pt-10 ">
        <div className="flex  flex-row flex-wrap px-4 md:px-0 md:flex-row items-center justify-center gap-8 md:gap-20">
          <FooterLogoAndDescription />
          <Features />
          <Company />
          <TeamAndPolicies />
          <StayInLoop />
        </div>
        <div>
          <p className="text-center pb-3 md:pb-3 applyArethusaPro400 text-[12px] 2xl:text-[14px] leading-[60px]">
            © 2025, ALKWAY Real Estate. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
