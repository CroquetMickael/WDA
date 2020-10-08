import React from "react";
import { useFocused, useSelected } from "slate-react";
import { ImageElement } from "./Elements/ImageElement";

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return (
        <ul className="list-disc" {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "heading-three":
      return <h3 {...attributes}>{children}</h3>;
    case "preformated":
      return <pre {...attributes}>{children}</pre>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "link":
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    case "image":
      return (
        <ImageElement
          attributes={attributes}
          children={children}
          element={element}
        />
      );
    case "numbered-list":
      return (
        <ol className="list-decimal" {...attributes}>
          {children}
        </ol>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};
export { Element };
