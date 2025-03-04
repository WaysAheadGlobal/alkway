import { useState } from "react";
import BathRooms from "./HeroFormComponents/BathRooms";
import BedRooms from "./HeroFormComponents/BedRooms";
import PropertyCategory from "./HeroFormComponents/PropertyCategory";
import PropertyType from "./HeroFormComponents/PropertyType";
import RangeSlider from "./HeroFormComponents/RangeSlider";

export default function SearchForm() {
  const [location, setLocation] = useState("");
  const [noOfBedrooms, setnoOfBedrooms] = useState("1");
  const [noOfBathrooms, setNoOfBathrooms] = useState("1");
  const [categoryOfProperty, setCategoryOfProperty] = useState("");
  const [typeOfProperty, setTypeOfProperty] = useState("");
  const price = "10000";
  // const [minPrice, setMinPrice] = useState("10000");

  const [maxPrice, setMaxPrice] = useState("20000");

  async function searchProperty() {
    console.log(noOfBedrooms, noOfBathrooms);
    // const data = {
    //   location: location,
    //   noOfBathrooms: noOfBathrooms,
    //   noOfBedrooms: noOfBedrooms,
    //   categoryOfProperty: categoryOfProperty,
    //   typeOfProperty: typeOfProperty,
    //   minPrice: minPrice,
    //   maxPrice: maxPrice,
    // };
    // const sendData = await fetch(``, {
    //   method: "POST",
    //   body: data,
    // });
  }

  return (
    <div className=" heroSectionForm rounded-md px-7 py-8 flex  flex-col gap-3">
      <div>
        <p className="applyClassicaProFont500 text-[11px] 2xl:text-[13px] leading-[26px]">
          Location
        </p>
        <input
          className="bg-white opacity-100 py-2 placeholder:text-[#696969] focus:outline-none rounded-md px-2 bg w-full text-[13px]"
          placeholder="Enter an address, state, city, area or zip code"
        ></input>
      </div>
      <div className="flex">
        <BedRooms setnoOfBedrooms={setnoOfBedrooms} />
        <BathRooms setNoOfBathrooms={setNoOfBathrooms} />
      </div>
      <div className="flex">
        <PropertyCategory />
        <PropertyType />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-3">
          <p className="applyClassicaProFont500 text-[11px] 2xl:text-[13px] ">
            Price Range:
          </p>
          {/* <p className="applyClassicaProFont text-[11px] 2xl:text-[13px]  text-[#696969]  uppercase">
            AED 100,000 to AED 10,000,000
          </p> */}
          <p className="applyClassicaProFont text-[11px] 2xl:text-[13px]  text-[#696969]  uppercase">
            AED {price} to AED {maxPrice}
          </p>
        </div>
        <RangeSlider maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
      </div>

      <button
        onClick={searchProperty}
        className="bg-black text-white text-[12px] applyClassicaProFont py-3 rounded-md tracking-wider"
      >
        Search
      </button>
    </div>
  );
}
