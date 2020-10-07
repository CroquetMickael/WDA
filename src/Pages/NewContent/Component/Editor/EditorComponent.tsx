import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { BlockButton } from "./Button/BlockButton";
import { MarkButton } from "./Button/MarkButton";
import { Element } from "./Elements";
import { Leaf } from "./Leaf";
import { Toolbar } from "./Toolbar";

const Editor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const renderElement = useCallback((props) => <Element {...props} />, []);

  const [value, setValue] = useState<any>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Toolbar>
        <MarkButton format="bold" icon="bold" />
        <MarkButton format="italic" icon="italic" />
        <MarkButton format="underline" icon="underline" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="quote-right" />
        <BlockButton format="numbered-list" icon="list-ol" />
        <BlockButton format="bulleted-list" icon="list-ul" />
      </Toolbar>
      <hr />
      <Editable
        id="article"
        renderLeaf={renderLeaf}
        renderElement={renderElement}
        className="h-full pl-2 overflow-auto bg-white"
      />
    </Slate>
  );
};

export { Editor };
