import React, { useEffect } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "./ReactMdeCustom.css"

interface MarkdownEditorProps {
  value: string;
  setValue: (event: any) => void;
}

const MarkdownEditor = (props: MarkdownEditorProps) => {
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });
  useEffect(() => {
    const mdeTextAera = document.getElementsByClassName("mde-textarea-wrapper");
    const mdeText = document.getElementsByClassName("mde-text");
    const mdeTabs = document.getElementsByClassName("mde-tabs");
    mdeTabs[0].remove();
    mdeTextAera[0].className += " h-full border-r border-solid border-grey-400";
    mdeText[0].removeAttribute("style");
  }, []);
  return (
    <ReactMde
      classes={{
        toolbar: "fixed w-full z-10",
        textArea: "pt-12 pl-2 h-full",
        reactMde: "rounded-none h-full"
      }}
      value={props.value}
      onChange={props.setValue}
      generateMarkdownPreview={markdown =>
        Promise.resolve(converter.makeHtml(markdown))
      }
    />
  );
};

export { MarkdownEditor };
