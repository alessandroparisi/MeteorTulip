function insertPhone(OS, company, model, storage, color) {
	Phones.insert({
		os: OS, // at first, only iOS or Android. Maybe blackberry and others later.
		company: company, 
		model: model,
		storage: storage,
		color: color
	})
}

if(Phones.find().count() === 0) {

	// iPhones
	insertPhone('iOS', 'Apple', 'iPhone 6', ['16', '64', '128'], ['Silver', 'Gold', 'Space Gray']);
	insertPhone('iOS', 'Apple', 'iPhone 6 Plus', ['16', '64', '128'], ['Silver', 'Gold', 'Space Gray']);
	insertPhone('iOS', 'Apple', 'iPhone 5s', ['16', '32', '64'], ['Silver', 'Gold', 'Space Gray']);
	insertPhone('iOS', 'Apple', 'iPhone 5c', ['8', '16', '32'], ['White', 'Pink', 'Yellow', 'Blue', 'Green', 'Polycarbonate']);
	insertPhone('iOS', 'Apple', 'iPhone 5', ['16', '32', '64'], ['Black', 'White']);
	insertPhone('iOS', 'Apple', 'iPhone 4s', ['8', '16', '32', '64'], ['Black', 'White']);
	insertPhone('iOS', 'Apple', 'iPhone 4', ['8', '16', '32'], ['Black', 'White']);

	// Android phones
	insertPhone('Android', 'Google', 'Nexus 5', ['8', '16'], ['Black', 'White', 'Red']);
	// TODO
}


