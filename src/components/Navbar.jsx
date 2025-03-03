import React from "react";
import { Link } from "react-router-dom";
import NavbarDrawer from "./NavbarDrawer";

export default function Navbar(props) {
  return (
    <>
      <header>
        {/* <div className="flex items-center justify-between px-[180px]"> */}
        <div className="flex items-center justify-between px-[20px] md:px-[150px] md:py-3">
          <img
            className="h-[80px] 2xl:h-[95px]"
            src="logo.svg"
            alt="logo"
          ></img>
          <div className="hidden md:visible md:flex items-center gap-6">
            <PageLinks />
            <button className="bg-[#F7F6F7] text-[#1A1A1A]  rounded-full px-5 py-1 flex  gap-2  font-semibold items-center">
              <img
                className="h-[20px] w-[20px] 2xl:h-[29px] 2xl:w-[29px]"
                src="whatsappIcon.png"
                alt="whatsappicon"
              ></img>
              <p className="pt-1 text-[14px] 2xl:text-[18px] applyArethusaPro leading-[30.4px]">
                WhatsApp
              </p>
            </button>
          </div>

          <div
            className="md:hidden "
            // className="h-[50px] w-[50px] md:hidden bg-black rounded-full"
          >
            <NavbarDrawer />
          </div>
        </div>
      </header>
    </>
  );
}
function PageLinks() {
  return (
    <div className="flex gap-8 text-[12px] 2xl:text-[16px] applyClassicaProFont text-[#1A1A1A]">
      <Link className="hover:text-black">Buy</Link>
      <Link className="hover:text-black">Rent</Link>
      <Link className="hover:text-black">Off Plans</Link>
      <Link className="hover:text-black">Commercial</Link>
      <Link className="hover:text-black">Luxury</Link>
      <Link className="hover:text-black">Contact Us</Link>
    </div>
  );
}
