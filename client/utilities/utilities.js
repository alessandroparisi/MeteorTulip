getArrayFromTag = function(nodeList) {
  //get the NodeList and transform it into an array
  return Array.prototype.slice.call(nodeList);
}
uncheckAll = function(array) {
	for(var i=0; i<array.length; i++){
	      array[i].checked = false;
	}
}