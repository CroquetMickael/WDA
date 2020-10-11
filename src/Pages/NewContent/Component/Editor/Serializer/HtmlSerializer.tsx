import escapeHtml from "escape-html";
import { Node, Text } from "slate";
import { checkSerialiazeLeaf } from "./checkLeaf";
const HtmlSerializer = (nodes) => {
  const result = nodes.map((n) => internalHtmlSerializer(n));
  return result.join("\n");
};

const internalHtmlSerializer = (node) => {
  if (Text.isText(node)) {
    return escapeHtml(node.text);
  }
  let children = node.children;
  if (node.children !== undefined) {
    children = children.map((n) => internalHtmlSerializer(n)).join("");
  }
  children = checkSerialiazeLeaf(node, children);
  switch (node.type) {
    case "bulleted-list":
      return `<ul class="list-disc">${children}</ul>`;
    case "list-item":
      return `<li>${children}</li>`;
    case "preformated":
      return `<pre>${children}</pre>`;
    case "block-quote":
      return `<blockquote>${children}</blockquote>`;
    case "paragraph":
      return `<p>${children}</p>`;
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    case "image":
      return `<img src=${escapeHtml(node.url)}/>`;
    case "heading-one":
      return `<h1>${children}</h1>`;
    case "heading-two":
      return `<h2>${children}</h2>`;
    case "heading-three":
      return `<h3>${children}</h3>`;
    default:
      return `<p>${children}</p>`;
  }
};

export { HtmlSerializer };
