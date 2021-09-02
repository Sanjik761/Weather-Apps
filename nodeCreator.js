const nodeCreator = (htmlTag, options = {}, text = '') => {
  const node = document.createElement(htmlTag);
  const keys = Object.keys(options);
  keys.forEach((key) => {
    node.setAttribute(key, options[key]);
  });
  node.textContent = text;
  return node;
};
