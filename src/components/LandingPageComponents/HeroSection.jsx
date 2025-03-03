import React from "react";
import FindDreamHome from "./FindDreamHome";
import SearchForm from "./SearchForm";

export default function HeroSection(props) {
  return (
    <>
      <div className="px-3 md:px-14 justify-center ">
        <div
          style={{
            width: "100%" /* or a specific width */,
            height: "auto" /* adjust based on your desired height */,
            backgroundImage: `url("heroBackground.jpg")`,
            backgroundSize:
              "cover" /* scales the image to cover the container */,
            backgroundPosition:
              "center center" /* ensures the image is centered (middle part visible) */,
            backgroundRepeat:
              "no-repeat" /* prevents the image from repeating */,
          }}
          className="heroSection rounded-b-3xl flex md:flex-row gap-5 md:gap-0 flex-col items-center justify-between py-8 md:px-16 "
        >
          <FindDreamHome />
          <SearchForm />
        </div>
      </div>

      {/* <div className="h-[400px] w-full  bg-white heroSection flex px-16">
        <img className="rounded-b-3xl" src="heroBackground.jpg" alt=""></img>
      </div> */}
    </>
  );
}
