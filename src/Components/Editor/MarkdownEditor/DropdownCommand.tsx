import { Command } from "react-mde";
import { DropDownComponent } from "../../DropDown/DropDown.component";
import React from "react";
import { InputComponent } from "../../Input/InputComponent";
import { ToggleButtonComponent } from "../../ToggleButton/ToggleButton.component";

const dropdownCommand: Command = {
  name: "dropdown",
  buttonProps: {"aria-label": "Content Settings"},
  keyCommand: "dropdown"
};
export { dropdownCommand };
