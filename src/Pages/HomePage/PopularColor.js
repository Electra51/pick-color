import { CompactPicker } from "react-color";

const PopularColor = ({ currentColor, onColorChange }) => {
  return (
    <div className="flex justify-center">
      <CompactPicker color={currentColor} onChangeComplete={onColorChange} />
    </div>
  );
};
export default PopularColor;
