import React from "react";

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.textLeft) {
    children = (
      <div {...attributes} className="text-left">
        {children}
      </div>
    );
  }
  if (leaf.textCenter) {
    children = (
      <div {...attributes} className="text-center">
        {children}
      </div>
    );
  }
  if (leaf.textRight) {
    children = (
      <div {...attributes} className="text-right">
        {children}
      </div>
    );
  }
  if (leaf.textJustify) {
    children = (
      <div {...attributes} className="text-justify">
        {children}
      </div>
    );
  }
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.strike) {
    children = <del>{children}</del>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  return <span {...attributes}>{children}</span>;
};

export { Leaf };
