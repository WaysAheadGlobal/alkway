import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/LandingPageComponents/HeroSection";
import InDemandProperties from "../components/LandingPageComponents/InDemandProperties";
import DreamHomeAwaits from "../components/LandingPageComponents/DreamHomeAwaits";
import FrequentyAskedQuestions from "../components/LandingPageComponents/FrequentyAskedQuestions";
import ContactUs from "../components/LandingPageComponents/ContactUs";
import Footer from "../components/Footer";
import CloseIcon from "@mui/icons-material/Close";
export default function LandingPage(props) {
  return (
    <>
      <div className="relative">
        <Navbar />
        <HeroSection />
        <ContactUsPopUp />
        <InDemandProperties />
        <DreamHomeAwaits />
        <FrequentyAskedQuestions />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
function ContactUsPopUp() {
  const [displayContactUsForm, setDisplayContactUsForm] = useState(true);
  function toggleDisplayForm() {
    if (displayContactUsForm === true) {
      setDisplayContactUsForm(false);
    } else {
      setDisplayContactUsForm(true);
    }
  }

  return (
    <div className=" bg-black pt-3 pb-3 rounded-lg mb-3  z-30 px-3 fixed  bottom-0 right-0 mr-3 w-[200px]">
      {displayContactUsForm === true && (
        <ContactForm toggleDisplayForm={toggleDisplayForm} />
      )}
      {displayContactUsForm === false && (
        <button
          onClick={toggleDisplayForm}
          className=" w-full duration-500  applyClassicaProFont bg-white text-black py-1 rounded-md"
          // className="applyClassicaProFont500 bg-white w-full py-2"
        >
          Contact Us
        </button>
      )}
    </div>
  );
}
function ContactForm({ toggleDisplayForm }) {
  return (
    <>
      <div className="text-white relative duration-500 applyClassicaProFont500 top-0  flex justify-between w-full">
        {/* <div className="text-white relative duration-500 applyClassicaProFont500 top-0 flex justify-between w-full"> */}
        Contact Us
        <CloseIcon onClick={toggleDisplayForm} />
      </div>
      <div>
        <p className="applyClassicaProFont500 text-white text-[11px] 2xl:text-[13px] leading-[26px]">
          Name
        </p>
        <input
          className="bg-white opacity-100 py-2 placeholder:text-[#696969] text-[11px] focus:outline-none rounded-md px-2 bg w-full 2xl:text-[13px]"
          placeholder="Enter your full name"
        ></input>
      </div>
      <div>
        <p className="applyClassicaProFont500 text-white text-[11px] 2xl:text-[13px] leading-[26px]">
          Email
        </p>
        <input
          className="bg-white opacity-100 py-2 text-[11px] placeholder:text-[#696969] focus:outline-none rounded-md px-2 bg w-full 2xl:text-[13px]"
          placeholder="Enter your email"
        ></input>
      </div>
      <div>
        <p className="applyClassicaProFont500 text-white text-[11px] 2xl:text-[13px] leading-[26px]">
          Contact No
        </p>
        <input
          className="bg-white opacity-100 py-2 text-[11px] placeholder:text-[#696969] focus:outline-none rounded-md px-2 bg w-full 2xl:text-[13px]"
          placeholder="Enter your contact no."
        ></input>
      </div>
      <button className=" w-full applyClassicaProFont bg-white text-black mt-4 py-1 rounded-md">
        Send
      </button>
    </>
  );
}
