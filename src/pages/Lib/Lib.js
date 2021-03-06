import React from "react";
import ReactModal from "../../components/Lib/Modal/ReactModal";
import Tooltip from "../../components/Lib/Tooltip/Tooltip";
import ColorPicker from "../../components/Lib/ColorPicker/ColorPicker";
import CreditCards from "../../components/Lib/CreditCards/CreditCards";
import ReactDate from "../../components/Lib/Date/ReactDate";

const Lib = () => {
  return (
    <div>
      <h1>Library</h1>
      <ReactModal />
      <Tooltip />
      <ColorPicker />
      <CreditCards />
      <ReactDate />
    </div>
  );
};

export default Lib;
