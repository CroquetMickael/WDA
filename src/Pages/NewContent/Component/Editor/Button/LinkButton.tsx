import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Editor, Transforms, Range } from "slate";
import { DropDownComponent } from "../../../../../Components/DropDown/DropDown.component";
import { InputComponent } from "../../../../../Components/Input/InputComponent";
import isUrl from "is-url";

const withLinks = (editor: Editor) => {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = (element) => {
    return element.type === "link" ? true : isInline(element);
  };

  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, { match: (n) => n.type === "link" });
};

const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, { match: (n) => n.type === "link" });
  return !!link;
};

const wrapLink = (editor: Editor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: "link",
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};
const insertLink = (editor, url, setOpenDropDown) => {
  if (editor.selection) {
    wrapLink(editor, url);
  }
  setOpenDropDown({ image: false, url: false });
};
interface LinkButtonProps {
  openDropDown: { image: boolean; url: boolean };
  setOpenDropDown: ({}: { image: boolean; url: boolean }) => void;
  setUrl: (e: any) => void;
  url: string;
  editor: Editor;
}
const LinkButton = (props: LinkButtonProps) => (
  <div className="relative">
    <button
      className="p-1 mb-1 mr-1 text-gray-400 hover:text-black"
      onClick={() =>
        props.setOpenDropDown({ image: false, url: !props.openDropDown.url })
      }
    >
      <FontAwesomeIcon icon="link" />
    </button>
    <DropDownComponent
      className="absolute"
      openDropDown={props.openDropDown.url}
    >
      <InputComponent
        id="link"
        label="Url Link"
        border={true}
        placeholder="link URL"
        value={props.url}
        type="text"
        onChange={(e: any) => props.setUrl(e.target.value)}
      />
      <button
        className="p-2 text-center text-white bg-blue-500 rounded"
        onClick={() =>
          insertLink(props.editor, props.url, props.setOpenDropDown)
        }
      >
        Add
      </button>
    </DropDownComponent>
  </div>
);

export { LinkButton, withLinks };
