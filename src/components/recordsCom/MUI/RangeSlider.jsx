import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export function RangeSlider() {
  const [value, setValue] = React.useState([1, 1000]);

  console.log({ value });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handleChange2 = (event, newValue2) => {
  //   setValue2(newValue2);
  // };

  return (
    <Box sx={{ width: 240 }}>
      <div className="flex gap-4 mb-[20px]">
        <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
          <input
            type="number"
            className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            // value={setValue}
            placeholder={value[0]}
          />
        </div>
        <div className="w-28 h-12 rounded-lg p-2 border-solid-1 border-[#D1D5DB] bg-[#F3F4F6] items-center inline-flex justify-center">
          <input
            type="number"
            className="w-20 h-6 text-base text-[#1F2937] not-italic font-normal bg-[#F3F4F6]"
            // value={setValue}
            placeholder={value[1]}
          />
        </div>
      </div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={1000}
      />
    </Box>
  );
}
