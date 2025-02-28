import React from "react";
import shareIcon from "./propertyCardIcons/share.svg";
import likeIcon from "./propertyCardIcons/like.svg";
import bookmarkIcon from "./propertyCardIcons/add.svg";
import bedroomIcon from "./propertyCardIcons/bedroomIcon.svg";
import bathroomIcon from "./propertyCardIcons/bathroomIcon.svg";
import callIcon from "./propertyCardIcons/call.svg";
import emailIcon from "./propertyCardIcons/mail.svg";
import whatsappIcon from "./propertyCardIcons/whatsapp.svg";

export default function InDemandProperties(props) {
  const propertyData = [
    {
      propertyId: 1,
      propertyImage: "propertyimages/elva.jpg",
      propertyType: "Townhouse, Off Plans",
      propertyName: "Elva The Valley by Emaar",
      price: "AED 2,890,000",
      propertyDescription:
        "Elva, an extraordinary creation by Emaar Properties, is nestled in The Valley, presenting a luxurious lifestyle.",
      noOfBedrooms: "3",
      noOfBathrooms: "3",
      contactNo: "",
      email: "",
      whatsappNo: "",
    },
    {
      propertyId: 2,
      propertyImage: "propertyimages/prescott.jpg",
      propertyType: "Apartment, Off Plans",
      propertyName: "Verano By Prescott at Studio City",
      price: "AED 2,890,000",
      propertyDescription:
        "Experience the pinnacle of urban living at Verano, an exclusive residential project offering modern studios ...",
      noOfBedrooms: "3",
      noOfBathrooms: "3",
      contactNo: "",
      email: "",
      whatsappNo: "",
    },
    {
      propertyId: 3,
      propertyImage: "propertyimages/palmjumereih.jpg",
      propertyType: "Villa, Luxury Property",
      propertyName: "Palm Jumeirah Beachfront Villa",
      price: "AED 18,500,000",
      propertyDescription:
        "A stunning 5-bedroom villa on Palm Jumeirah with private beach access and breathtaking sea views.",
      noOfBedrooms: "5",
      noOfBathrooms: "4",
      contactNo: "",
      email: "",
      whatsappNo: "",
    },
    {
      propertyId: 4,
      propertyImage: "propertyimages/burjcrown.jpg",
      propertyType: "Apartment, Ready to Move",
      propertyName: "Burj Crown Downtown Dubai",
      price: "AED 1,950,000",
      propertyDescription:
        "Experience the pinnacle of urban living at Verano, an exclusive residential project offering modern studios ...",
      noOfBedrooms: "3",
      noOfBathrooms: "2",
      contactNo: "",
      email: "",
      whatsappNo: "",
    },
  ];
  return (
    <>
      {/* <div className="py-7"> */}
      <div className="flex flex-col px-3 md:px-14 my-16 ">
        <div className="flex flex-col items-center">
          <p className="applyClassicaProFont300 text-[9px] tracking-widest 2xl:text-[12px] text-[#52434A]">
            DUBAI REAL ESTATE
          </p>
          <p className="applyArethusaPro500 text-[18px] tracking-tighter 2xl:text-[24px] leading-[37.4px] text-[#252A2C]">
            In-Demand Properties
          </p>
        </div>
        <div className="flex flex-wrap gap-5 py-8 justify-center">
          {propertyData.map((singleProperty) => (
            <PropertyCard
              propertyInfo={singleProperty}
              key={singleProperty.propertyId}
            />
          ))}
          {/* <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard /> */}
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-black applyClassicaProFont text-[12px] py-1 2xl:text-[16px] leading-[28px] rounded-md text-center w-[250px]">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

function PropertyCard({ propertyInfo }) {
  const data = propertyInfo;
  return (
    <div className="w-[100] md:w-[20%]">
      <PropertyCardImagesAndIcons imageLink={data.propertyImage} />
      <PropertyInfo propertyInfo={propertyInfo} />
    </div>
  );
}
function PropertyInfo({ propertyInfo }) {
  return (
    <div className="px-3 py-3">
      <p className="applyClassicaProFont text-[12px] 2xl:text-[13px] text-[#222222]">
        {/* Townhouse, Off Plans */}
        {propertyInfo.propertyType}
      </p>
      <p className="applyArethusaPro my-2 text-[14px] text-[#000405]">
        {/* Elva The Valley by Emaar */}
        {propertyInfo.propertyName}
      </p>
      <p className="applyClassicaProFont mb-2 leading-[17px] text-[#051D2D]  2xl:text-[17px]">
        {/* AED 2,890,000 */}
        {propertyInfo.price}
      </p>
      <p className="applyClassicaProFont300 text-[13px] leading-[21.45px]">
        {/* Elva, an extraordinary creation by Emaar Properties, is nestled in The
        Valley, presenting a luxurious lifestyle. */}
        {propertyInfo.propertyDescription}
      </p>
      <div className="flex my-4 justify-between text-[9px] text-[#5C727D] applyOpenSansFont">
        <p className="flex  gap-[3px]  items-center">
          <img className="h-[12px]" src={bedroomIcon}></img>
          {propertyInfo.noOfBedrooms}
        </p>
        <p className="flex gap-[3px] items-center">
          <img className="h-[12px]" src={bathroomIcon}></img>
          {/* 3 */}
          {propertyInfo.noOfBathrooms}
        </p>
      </div>
      <div className="text-[#1A1A1A] flex gap-2 text-[10px]">
        <button className="flex gap-[4px]  rounded-md w-[40%] applyOpenSansFont py-[0.4rem] items-center bg-[#eeeeee] justify-center">
          <img className="h-[14px]" src={callIcon}></img>Call
        </button>
        <button className="flex gap-[4px] rounded-md w-[40%] py-[0.4rem] applyOpenSansFont items-center bg-[#eeeeee] justify-center">
          <img className="h-[9px]" src={emailIcon}></img>Email
        </button>
        <button className="flex gap-[4px] rounded-md w-[20%] py-[0.4rem] applyOpenSansFont bg-[#eeeeee] items-center justify-center">
          <img className="h-[12px]" src={whatsappIcon}></img>
        </button>
      </div>
    </div>
  );
}
function PropertyCardImagesAndIcons({ imageLink }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageLink})`,
        // backgroundImage: 'url("propertyimages/property.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",

        backgroundRepeat: "no-repeat",
      }}
      className="h-[160px] rounded-t-md relative w-full 2xl:h-[220px] 2xl:w-[353px] "
      // className="h-[160px] relative w-[260px] 2xl:h-[220px] 2xl:w-[353px] "
    >
      <div className="absolute top-0 w-full flex gap-1 justify-end px-2 pt-3">
        <button className="bg-[#1A1A1A] text-[8px] 2xl:text-[11px] px-2 text-center leading-[20px] applyClassicaProFont rounded-[5px] text-white">
          Off Plans
        </button>
        <button className="bg-[#1A1A1A] text-[8px] 2xl:text-[11px] px-2 text-center leading-[20px] applyClassicaProFont rounded-[5px] text-white">
          Active
        </button>
      </div>
      <div className=" absolute bottom-0 text-white flex gap-1 w-full px-3 pb-2">
        <button className="rounded-sm py-1 px-1 propertyCardIcons">
          <img
            className="h-[10px] w-[10px]"
            src={shareIcon}
            alt="share property Icon"
          ></img>
        </button>
        <button className="   rounded-sm py-1 px-1  propertyCardIcons">
          <img src={likeIcon} alt="like property Icon"></img>
        </button>
        <button className="  rounded-sm py-1 px-1 propertyCardIcons">
          <img src={bookmarkIcon} alt="bookmark property Icon"></img>
        </button>
      </div>
    </div>
  );
}
