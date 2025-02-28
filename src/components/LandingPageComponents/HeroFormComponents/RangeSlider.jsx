import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function RangeSlider() {
  const [value, setValue] = React.useState([100000, 10000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value[0]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </Box>
  );
}
