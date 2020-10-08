import React from "react";
import { useFocused, useSelected } from "slate-react";

const ImageElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          className={`${selected && focused ? "shadow-outline" : ""}`}
        />
      </div>
      {children}
    </div>
  );
};

export { ImageElement };
