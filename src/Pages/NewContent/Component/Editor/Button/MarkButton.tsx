import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { Button } from "./Button";

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  const isMarkActive = (editor: Editor, format: string | number) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (editor: any, format: any) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  return (
    <Button
      isActive={isMarkActive(editor, format)}
      func={() => toggleMark(editor, format)}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export { MarkButton };
