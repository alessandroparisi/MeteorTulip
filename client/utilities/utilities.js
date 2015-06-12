getArrayFromTag = function(nodeList) {
  //get the NodeList and transform it into an array
  return Array.prototype.slice.call(nodeList);
};

resetFilters = function(){
  var filters = {
    "company": "",
    "model" : "",
    "storages": [],
    "colors": []
  }
  Session.set("filters", filters);
};