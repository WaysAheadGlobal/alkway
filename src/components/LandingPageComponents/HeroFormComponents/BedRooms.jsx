import React from "react";
export default function BedRooms({ setnoOfBedrooms }) {
  return (
    <div className="w-[50%]">
      <p className="applyClassicaProFont500 text-[11px] 2xl:text-[13px]  leading-[26px]">
        Bedrooms
      </p>
      <select
        onChange={(e) => setnoOfBedrooms(e.target.value)}
        className="w-[98%] focus:outline-none py-2 text-[11px] 2xl:text-[13px]  px-2 text-[#696969] rounded-md "
        id="bedrooms"
        name="Bedrooms"
      >
        <option className="hidden" value="" disabled selected>
          Bedrooms
        </option>
        {/* <option value="apple">Bedrooms</option> */}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {/* <input placeholder="Enter an address, state, city, area or zip code"></input> */}
    </div>
  );
}
