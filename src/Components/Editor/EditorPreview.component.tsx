import React from "react";
import draftToHtml from "draftjs-to-html";
import * as Showdown from "showdown";
import { convertToRaw } from "draft-js";
const EditorPreviewComponent = (props: any) => {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

  return (
    <>
      {props.isMarkdown ? (
        <div className="w-1/2 pt-12">
          <h1 className="text-xl font-bold bg-white w-full">{props.title}</h1>
          <div
            className="overflow-auto bg-white pl-2 h-full "
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(props.value)
            }}
          />
        </div>
      ) : ( 
        <div className="w-1/2">
          <h1 className="text-xl font-bold bg-white w-full pt-16 xl:pt-12">
            {props.title}
          </h1>
          <div
            className="overflow-auto bg-white pl-2 h-full "
            dangerouslySetInnerHTML={{
              __html: draftToHtml(
                convertToRaw(props.editorState.getCurrentContent())
              )
            }}
          />
        </div>
      )}
    </>
  );
};

export { EditorPreviewComponent };
