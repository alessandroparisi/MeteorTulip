getArrayFromTag = function(nodeList) {
  //get the NodeList and transform it into an array
  return Array.prototype.slice.call(nodeList);
}