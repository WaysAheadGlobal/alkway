import React from "react";
import contactUsImage from "./contactUsImage.jpg";
export default function ContactUs(props) {
  return (
    <>
      <div className="flex mx-14 my-16  bg-[#F9F9F9] items-center rounded-2xl 2xl:rounded-[20px]">
        {/* <div className="flex px-14 py-8 gap-20 bg-white "> */}

        <div className="">
          <img
            className="w-[600px] rounded-2xl 2xl:rounded-[20px]"
            src={contactUsImage}
            alt=""
          ></img>
        </div>
        <div className="flex flex-col gap-3 mx-24">
          <div>
            <p className="applyClassicaProFont300 leading-[14px] uppercase text-[9px] tracking-widest 2xl:text-[12px] text-[#52434A]">
              Contact us
            </p>
            <p className="applyArethusaPro500 text-[18px] 2xl:text-[24px] leading-[37.4px] text-[#252A2C]">
              We'd love to hear from you
            </p>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </>
  );
}
function ContactUsForm() {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-5">
        <div>
          <p className="text-[11px] 2xl:text-[13px] applyClassicaProFont700 2xl:leading-[22px]">
            Your Name
          </p>
          <input
            className="focus:outline-none mt-[2px] rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
        <div>
          <p className="text-[11px] 2xl:text-[13px]  applyClassicaProFont700 2xl:leading-[22px]">
            Your Email
          </p>
          <input
            className="focus:outline-none mt-[2px] rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <p className="text-[11px] 2xl:text-[13px]   applyClassicaProFont700 2xl:leading-[22px]">
            Your Phone
          </p>
          <input
            className="focus:outline-none mt-[2px] rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
        <div>
          <p className="text-[11px] 2xl:text-[13px]  applyClassicaProFont700 2xl:leading-[22px]">
            Your City
          </p>
          <input
            className="focus:outline-none mt-[2px] rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></input>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[11px] 2xl:text-[13px]  applyClassicaProFont700 2xl:leading-[22px]">
            Your Message
          </p>
          <textarea
            className="focus:outline-none mt-[2px] w-full rounded-[4px] 2xl:rounded-[5px] border-[1px] border-[#E7E7E7] py-1"
            placeholder=""
          ></textarea>
        </div>
      </div>
      <button className="bg-black text-[12px] py-2 rounded-[4px] 2xl:text-[14px] text-white applyClassicaProFont leading-[16.1px]">
        Send Message
      </button>
    </div>
  );
}
