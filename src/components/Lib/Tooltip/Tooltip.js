import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function Tooltip() {
  return (
    <div>
      <Tippy
        content="Basic tooltip"
        placement="right"
        arrow={false}
        delay={500}
      >
        <button>Hover</button>
      </Tippy>
    </div>
  );
}

export default Tooltip;
