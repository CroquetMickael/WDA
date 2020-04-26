import React from "react";
import { DropDownComponent } from "../DropDown/DropDown.component";
import { ToggleButtonComponent } from "../ToggleButton/ToggleButton.component";
import { InputComponent } from "../Input/InputComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropDownEditorComponent = (props: any) => (
  <>
    <li className="mde-header-item">
      <button onClick={props.toggleOpen}>
        <FontAwesomeIcon className="cursor-pointer" icon="bars" />
      </button>
    </li>
    <DropDownComponent
      openDropDown={props.openDropDown}
      className="mt-8 absolute"
    >
      <div className="mb-4">
        <InputComponent
          placeholder="Title"
          type="text"
          onChange={(event: any) => props.setTitle(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <ToggleButtonComponent
          value={props.isMarkdown}
          setValue={props.setIsMarkdown}
          label="Markdown content"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </DropDownComponent>
  </>
);

export { DropDownEditorComponent };
