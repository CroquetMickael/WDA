import React from "react";

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.textLeft) {
    children = (
      <span {...attributes} className="block text-left">
        {children}
      </span>
    );
  }
  if (leaf.textCenter) {
    children = (
      <span {...attributes} className="block text-center">
        {children}
      </span>
    );
  }
  if (leaf.textRight) {
    children = (
      <span {...attributes} className="block text-right">
        {children}
      </span>
    );
  }
  if (leaf.textJustify) {
    children = (
      <span {...attributes} className="block text-justify">
        {children}
      </span>
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
