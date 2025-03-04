import React from "react";
export default function PropertyCategory() {
  return (
    <div className="w-[50%]">
      <p className="applyClassicaProFont500 text-[11px] 2xl:text-[13px] leading-[26px]">
        Property Category
      </p>
      <select
        className="w-[98%] focus:outline-none py-2 text-[11px] 2xl:text-[13px] px-2 text-[#696969] rounded-md "
        id="bedrooms"
        name="Bedrooms"
      >
        <option className="hidden" value="" disabled selected>
          Category
        </option>
        {/* <option value="apple">Bedrooms</option> */}
        <option value="Buy">Buy</option>
        <option value="Rent">Rent</option>
        <option value="Off Plans">Off Plans</option>
        <option value="Commercial">Commercial</option>
        <option value="Luxury">Luxury</option>
      </select>
      {/* <input placeholder="Enter an address, state, city, area or zip code"></input> */}
    </div>
  );
}
