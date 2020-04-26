import React, { useState } from "react";
import { Layout } from "../../Components/Layout/Layout";
import { EditorState } from "draft-js";
import { MarkdownEditor } from "../../Components/Editor/MarkdownEditor/MarkdownEditor.component";

import { HtmlEditor } from "../../Components/Editor/HtmlEditor/HtmlEditor.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropDownComponent } from "../../Components/DropDown/DropDown.component";
import { InputComponent } from "../../Components/Input/InputComponent";
import { ToggleButtonComponent } from "../../Components/ToggleButton/ToggleButton.component";
import { EditorPreviewComponent } from "../../Components/Editor/EditorPreview.component";

const NewContentComponent = () => {
  const [value, setValue] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isMarkdown, setIsMarkdown] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [title, setTitle] = useState("");

  const toggleOpen = () => {
    if (openDropDown) {
      setOpenDropDown(false);
    } else {
      setOpenDropDown(true);
    }
  };

  return (
    <Layout overflow={false}>
      <div className="flex h-full w-full">
        <div
          className={`fixed ${
            isMarkdown ? "top-2.5" : "top-4.5 xl:top-2.5"
          } right-1 z-20`}
        >
          <button onClick={toggleOpen}>
            <FontAwesomeIcon icon="bars" />
          </button>
          <DropDownComponent openDropDown={openDropDown}>
            <div className="mb-4">
              <InputComponent
                placeholder="Title"
                type="text"
                onChange={(event: any) => setTitle(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <ToggleButtonComponent
                value={isMarkdown}
                setValue={setIsMarkdown}
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
        </div>
        <div className="w-1/2 h-full">
          {isMarkdown ? (
            <MarkdownEditor value={value} setValue={setValue} />
          ) : (
            <HtmlEditor
              editorState={editorState}
              setEditorState={setEditorState}
            />
          )}
        </div>
        <EditorPreviewComponent
          isMarkdown={isMarkdown}
          editorState={editorState}
          title={title}
          value={value}
        />
      </div>
    </Layout>
  );
};

export { NewContentComponent };
