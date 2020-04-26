import React from "react";
import ReactModal from "../../components/Lib/Modal/ReactModal";
import Tooltip from "../../components/Lib/Tooltip/Tooltip";
import ColorPicker from "../../components/Lib/ColorPicker/ColorPicker";

const Lib = () => {
  return (
    <div>
      <h1>Library</h1>
      <ReactModal />
      <Tooltip />
      <ColorPicker />
    </div>
  );
};

export default Lib;
