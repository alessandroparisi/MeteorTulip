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

Deps.autorun(function() {
  Meteor.subscribeWithPagination('searchAds', Session.get("filters"));
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
