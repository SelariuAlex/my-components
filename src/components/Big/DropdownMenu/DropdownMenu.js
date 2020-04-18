import React from "react";
import NavbarDropdown from "./NavbarDropdown";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import { ReactComponent as BellIcon } from "../../../icons/bell.svg";
import { ReactComponent as PlusIcon } from "../../../icons/plus.svg";
import { ReactComponent as CaretIcon } from "../../../icons/caret.svg";
import { ReactComponent as MessengerIcon } from "../../../icons/messenger.svg";

import "./DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <NavbarDropdown>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <Dropdown></Dropdown>
      </NavItem>
    </NavbarDropdown>
  );
};

export default DropdownMenu;
