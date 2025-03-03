import React from "react";
export default function BathRooms({ setNoOfBathrooms }) {
  return (
    <div className="w-[50%]">
      <p className="applyClassicaProFont500 text-[11px] 2xl:text-[13px]  leading-[26px]">
        Bathrooms
      </p>
      <select
        onChange={(e) => setNoOfBathrooms(e.target.value)}
        className="w-[98%] focus:outline-none py-2 text-[11px] 2xl:text-[13px]  px-2 text-[#696969] rounded-md "
        id="bedrooms"
        name="Bathrooms"
      >
        <option className="hidden" value="" disabled selected>
          Bathooms
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
