import React from "react";
import "./ReactDraftCustom.css";
import { Editor } from "react-draft-wysiwyg";

const HtmlEditor = (props: any) => {
  return (
    <Editor
      editorState={props.editorState}
      toolbarClassName="fixed w-full z-10"
      wrapperClassName="h-full"
      editorClassName="h-full pt-16 xl:pt-12  pl-2 bg-white"
      onEditorStateChange={props.setEditorState}
    />
  );
};

export { HtmlEditor };
