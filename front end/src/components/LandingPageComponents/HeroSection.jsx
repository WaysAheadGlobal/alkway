import React from "react";
import FindDreamHome from "./FindDreamHome";
import SearchForm from "./SearchForm";

export default function HeroSection(props) {
  return (
    <>
      <div className="px-14 justify-center ">
        <div className="heroSection rounded-b-3xl flex items-center justify-between px-16 ">
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

// export default function HeroSection(props) {
//     return (
//       <>
//         <div className="h-[400px] w-full  bg-white heroSection flex px-16">
//           <img className="rounded-b-3xl" src="heroBackground.jpg" alt=""></img>
//         </div>
//       </>
//     );
//   }
