import React from "react";
import { Link } from "react-router-dom";

export default function Company(props) {
  return (
    <>
      <div className="mt-5">
        <div>
          <p className="applyArethusaPro text-[17px] mb-3 2xl:text-[24px] leading-[32px]">
            Company
          </p>
        </div>
        <div className="flex flex-col gap-2 applyClassicaProFont text-[#6D737A] text-[12px] 2xl:text-[16px]">
          <Link>About Us</Link>
          <Link>Why us</Link>
          <Link>Luxury</Link>
          <Link>Featured</Link>
          <Link>Contact Us</Link>
        </div>
      </div>
    </>
  );
}
