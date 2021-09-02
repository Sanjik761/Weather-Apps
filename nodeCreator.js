const nodeCreator = (htmlTag, options = {}, text = '') => {
  const node = document.createElement(htmlTag);
  const keys = Object.keys(options);
  keys.forEach((key) => {
    node.setAttribute(key, options[key]);
  });
  node.textContent = text;
  return node;
};

const chainAppend = (nodes = []) => {
  for (let i = nodes.length - 2; i >= 0; i -= 1) {
    nodes[i].appendChild(nodes[i + 1]);
  }
};

window.nodeCreator = nodeCreator();
window.chainAppend = chainAppend();

export { nodeCreator, chainAppend };