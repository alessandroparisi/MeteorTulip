Template.buy.helpers({
  phoneRows: function() {
  	var phones = Ads.find({}, {sort: {model: -1}}).fetch();
  	var size = 4;
  	var chunks = [];
  	while(phones.length > size) {
  		chunks.push({ row: phones.slice(0, size) });
  		phones = phones.slice(size);
  	}
  	chunks.push({row: phones});
  	return chunks;
  }
});

// function makeStrFromArr(array) {
// 	var str = '';
// 	for(var i = 0; i < array.length; i++) {
// 		str += array[i];
// 		if(i !==  array.length - 1) {
// 			str += ", ";
// 		}
// 	}
// 	return str;
// }

Template.storage.events({
  'change input':function(e){
    //Get and make a copy of filters
    var allFilters = Session.get("filters");
    var allFilters = _.extend({}, allFilters);


    //TODO make sessions object wiht empty stuff on start
    //TODO Maybe not idk yoloswag
    if(_.isUndefined(allFilters.storage)) {
      allFilters.storage = [];
    }

    //Get GB Filters
    var storageFilters = allFilters.storage;

    if(e.target.checked){
      storageFilters.push(e.target.name);
    }
    else{
      var index = storageFilters.indexOf(e.target.name);
      storageFilters.splice(index, 1);
    }
    Session.set("filters", allFilters);


    var f = Session.get("filters");
    console.log(f.storage);
  }
})