import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DropDownComponent } from "../../../../../Components/DropDown/DropDown.component";
import { InputComponent } from "../../../../../Components/Input/InputComponent";
import { ContentService } from "../../../NewContent.service";
import { HtmlSerializer } from "../Serializer/HtmlSerializer";
interface LinkButtonProps {
  openDropDown: { image: boolean; url: boolean; save: boolean };
  setOpenDropDown: ({}: {
    image: boolean;
    url: boolean;
    save: boolean;
  }) => void;
  setTitle: (e: any) => void;
  title: string;
  editorValue: any;
}

const SaveButton = (props: LinkButtonProps) => (
  <div className="relative">
    <button
      className="p-1 mb-1 mr-1 text-gray-400 hover:text-black"
      onClick={() =>
        props.setOpenDropDown({
          save: !props.openDropDown.save,
          url: false,
          image: false,
        })
      }
    >
      <FontAwesomeIcon icon="save" />
    </button>
    <DropDownComponent
      className="absolute"
      openDropDown={props.openDropDown.save}
    >
      <InputComponent
        id="title"
        label="Title"
        border={true}
        placeholder="Content Title"
        type="text"
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <button
        className="p-2 text-center text-white bg-blue-500 rounded"
        onClick={() =>
          ContentService(HtmlSerializer(props.editorValue), props.title)
        }
      >
        Save
      </button>
    </DropDownComponent>
  </div>
);

export { SaveButton };
