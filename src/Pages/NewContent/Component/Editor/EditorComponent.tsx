import React, { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { BlockButton, toggleBlock } from "./Button/BlockButton";
import { MarkButton, toggleMark } from "./Button/MarkButton";
import { Element } from "./Elements";
import { Leaf } from "./Leaf";
import { Toolbar } from "./Toolbar";
import isHotkey from "is-hotkey";
import { Separator } from "./Separator";
import { LinkButton, withLinks } from "./Button/LinkButton";
import { ImageButton, withImages } from "./Button/ImageButton";
import { SaveButton } from "./Button/SaveButton";
import { withHistory } from "slate-history";

const Editor = () => {
  const editor = withImages(
    withLinks(useMemo(() => withHistory(withReact(createEditor())), []))
  );
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const [openDropDown, setOpenDropDown] = useState({
    image: false,
    url: false,
    save: false,
  });
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [value, setValue] = useState<any>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  const [title, setTitle] = useState("");

  const HOTKEYS: any = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+`": "code",
    "mod+z": "undo",
    "mod+y": "redo",
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <Toolbar>
        <select onChange={(e) => toggleBlock(editor, e.target.value)}>
          <option value="default">Paragraph</option>
          <option value="heading-one" className="text-3xl font-bold">
            Heading 1
          </option>
          <option value="heading-two" className="text-2xl font-bold">
            Heading 2
          </option>
          <option value="heading-three" className="text-xl font-bold">
            Heading 3
          </option>
          <option value="preformated" className="font-mono">
            preformated
          </option>
        </select>
        <Separator />
        <MarkButton format="bold" icon="bold" />
        <MarkButton format="italic" icon="italic" />
        <MarkButton format="underline" icon="underline" />
        <MarkButton format="code" icon="code" />
        <MarkButton format="strike" icon="strikethrough" />
        <Separator />
        <MarkButton format="textLeft" icon="align-left" />
        <MarkButton format="textCenter" icon="align-center" />
        <MarkButton format="textRight" icon="align-right" />
        <MarkButton format="textJustify" icon="align-justify" />
        <Separator />
        <BlockButton format="block-quote" icon="quote-right" />
        <BlockButton format="numbered-list" icon="list-ol" />
        <BlockButton format="bulleted-list" icon="list-ul" />
        <Separator />
        <LinkButton
          editor={editor}
          openDropDown={openDropDown}
          setOpenDropDown={setOpenDropDown}
          url={url}
          setUrl={setUrl}
        />
        <ImageButton
          editor={editor}
          image={image}
          openDropDown={openDropDown}
          setOpenDropDown={setOpenDropDown}
          setImage={setImage}
        />
        <Separator />
        <SaveButton
          editorValue={value}
          setOpenDropDown={setOpenDropDown}
          openDropDown={openDropDown}
          setTitle={setTitle}
          title={title}
        />
      </Toolbar>
      <hr />
      <h1 className="pl-2 text-3xl font-bold bg-white">{title}</h1>
      <Editable
        id="article"
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        className="h-full pl-2 overflow-auto bg-white"
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              if (mark === "undo") {
                return editor.undo();
              } else if (mark === "redo") {
                return editor.redo();
              }
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

export { Editor };
