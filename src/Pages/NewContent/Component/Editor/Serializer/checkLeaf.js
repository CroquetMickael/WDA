function checkSerialiazeLeaf(node, children) {
  if (node.children[0].code) {
    children = `<code>${children}</code>`;
  }
  if (node.children[0].underline) {
    children = `<u>${children}</u>`;
  }
  if (node.children[0].italic) {
    children = `<em>${children}</em>`;
  }
  if (node.children[0].bold) {
    children = `<strong>${children}</strong>`;
  }
  if (node.children[0].strike) {
    children = `<del>${children}</del>`;
  }
  if (node.children[0].textCenter) {
    children = `<span class="block text-center">${children}</span>`;
  }
  if (node.children[0].textRight) {
    children = `<span class="block text-right">${children}</span>`;
  }
  if (node.children[0].textJustify) {
    children = `<span class="block text-justify">${children}</span>`;
  }
  if (node.children[0].textLeft) {
    children = `<span class="block text-left">${children}</span>`;
  }
  return children;
}

export { checkSerialiazeLeaf };
