import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { Button } from "./Button";

const ALIGNTEXT = ["textLeft", "textRight", "textJustify", "textCenter"];
const isAlign = (format: string) => ALIGNTEXT.includes(format);
const isMarkActive = (editor: Editor, format: string | number) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor: Editor, format: any) => {
  const isActive = isMarkActive(editor, format);
  if (isAlign(format)) {
    Editor.removeMark(editor, "textLeft");
    Editor.removeMark(editor, "textJustify");
    Editor.removeMark(editor, "textCenter");
    Editor.removeMark(editor, "textRight");
  }
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <Button
      isActive={isMarkActive(editor, format)}
      func={() => toggleMark(editor, format)}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export { MarkButton, toggleMark };
