import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function SliderSizes({ maxPrice, setMaxPrice }) {
  const [range, setRange] = useState(2);
  function setPriceRange(e) {
    setMaxPrice(e.target.value * 10000);
    setRange(e.target.value);
    // console.log(e.target.value);
  }
  return (
    <Box sx={{ width: 300 }}>
      <input
        onChange={setPriceRange}
        style={{
          webkitAppearance:
            "none" /* Remove default styles in Webkit browsers */,
          appearance: "none",
          width: "100%",
          height: "5px",
          background: "#ddd" /* Set the background color of the track */,
          borderRadius: "5px",
          outline: "none",
          cursor: "pointer",
        }}
        className="w-full border-none bg-black"
        type="range"
        min="0"
        max="100"
        step="1"
        value={range}
      ></input>
      {/* <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> */}
      {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}
    </Box>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function RangeSlider() {
//   const [value, setValue] = React.useState([20, 37]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: 300 }}>
//       <Slider
//         getAriaLabel={() => "Temperature range"}
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//       />
//     </Box>
//   );
// }
