import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Editor, Transforms, Range } from "slate";
import { DropDownComponent } from "../../../../../Components/DropDown/DropDown.component";
import { InputComponent } from "../../../../../Components/Input/InputComponent";
import isUrl from "is-url";
import imageExtensions from "image-extensions";

const isImageUrl = (url) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};

const withImages = (editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertImage = (editor, url, setOpenDropDown?) => {
  const text = { text: "" };
  const image = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
  if (setOpenDropDown !== undefined) {
    setOpenDropDown({ image: false, url: false });
  }
};

interface LinkButtonProps {
  openDropDown: { image: boolean; url: boolean };
  setOpenDropDown: ({}: { image: boolean; url: boolean }) => void;
  setImage: (e: any) => void;
  image: string;
  editor: Editor;
}
const ImageButton = (props: LinkButtonProps) => (
  <div className="relative">
    <button
      className="p-1 mb-1 mr-1 text-gray-400 hover:text-black"
      onClick={() =>
        props.setOpenDropDown({ image: !props.openDropDown.image, url: false })
      }
    >
      <FontAwesomeIcon icon="image" />
    </button>
    <DropDownComponent
      className="absolute"
      openDropDown={props.openDropDown.image}
    >
      <InputComponent
        id="source"
        label="Source"
        border={true}
        placeholder="Image source URL"
        type="text"
        onChange={(e) => props.setImage(e.target.value)}
      />
      <button
        className="p-2 text-center text-white bg-blue-500 rounded"
        onClick={() =>
          insertImage(props.editor, props.image, props.setOpenDropDown)
        }
      >
        Add
      </button>
    </DropDownComponent>
  </div>
);

export { ImageButton, withImages };
