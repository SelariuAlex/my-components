import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "close" : "Pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        ></ChromePicker>
      )}
      <p>You picked {color}</p>
    </div>
  );
}

export default ColorPicker;
