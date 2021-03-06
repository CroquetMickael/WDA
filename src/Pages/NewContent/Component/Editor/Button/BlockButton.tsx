import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Editor, Transforms } from "slate";
import { useSlate } from "slate-react";
import { Button } from "./Button";

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return !!match;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type as string),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      isActive={isBlockActive(editor, format)}
      func={() => toggleBlock(editor, format)}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export { BlockButton, toggleBlock };
