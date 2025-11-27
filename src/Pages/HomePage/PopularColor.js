// import React, { useState } from "react";
// import { CompactPicker } from "react-color";

// const PopularColor = () => {
//   const [currentColor, setCurrentColor] = useState("#000");
//   const handleOnChange = (color) => {
//     setCurrentColor(color.hex);
//   };
//   return (
//     <div className="w-full">
//       <CompactPicker
//         className="w-full"
//         color={currentColor}
//         onChangeComplete={handleOnChange}
//       />
//     </div>
//   );
// };

// export default PopularColor;

import { CompactPicker } from "react-color";

const PopularColor = ({ currentColor, onColorChange }) => {
  return (
    <div className="flex justify-center">
      <CompactPicker color={currentColor} onChangeComplete={onColorChange} />
    </div>
  );
};
export default PopularColor;
