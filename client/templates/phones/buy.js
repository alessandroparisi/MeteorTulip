Template.buy.helpers({
  phoneRows: function() {
  	var phones = Phones.find({}, {sort: {model: -1}}).fetch();
  	phones.map(function(phone) {
  		phone.capacityStr = makeStrFromArr(phone.capacities);
  		phone.colorStr = makeStrFromArr(phone.colors);
  		return phone;
  	});
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

function makeStrFromArr(array) {
	var str = '';
	for(var i = 0; i < array.length; i++) {
		str += array[i];
		if(i !==  array.length - 1) {
			str += ", ";
		}
	}
	return str;
}
