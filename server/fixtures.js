function insertPhone(OS, company, model, storage, color, image_url) {
	Phones.insert({
		os: OS, // at first, only iOS or Android. Maybe blackberry and others later.
		company: company, 
		model: model,
		storage: storage,
		color: color,
		image_url: image_url
	})
}

var some_url = 'http://imgur.com/BsLIjT7';

if(Phones.find().count() === 0) {

	// iPhones
	insertPhone('iOS', 'Apple', 'iPhone 6', ['16', '64', '128'], ['Silver', 'Gold', 'Space Gray'], some_url);
	insertPhone('iOS', 'Apple', 'iPhone 6 Plus', ['16', '64', '128'], ['Silver', 'Gold', 'Space Gray'], some_url);
	insertPhone('iOS', 'Apple', 'iPhone 5s', ['16', '32', '64'], ['Silver', 'Gold', 'Space Gray'], some_url);
	insertPhone('iOS', 'Apple', 'iPhone 5c', ['8', '16', '32'], ['White', 'Pink', 'Yellow', 'Blue', 'Green', 'Polycarbonate'], some_url);
	insertPhone('iOS', 'Apple', 'iPhone 5', ['16', '32', '64'], ['Black', 'White'], some_url);
	insertPhone('iOS', 'Apple', 'iPhone 4s', ['8', '16', '32', '64'], ['Black', 'White'], some_url);
	insertPhone('iOS', 'Apple', 'iPhone 4', ['8', '16', '32'], ['Black', 'White'], some_url);
	
	// Android
	insertPhone('Android', 'Google', 'Nexus 5', ['8', '16'], ['Black', 'White', 'Red'], some_url);

}

var sampleCondition = {
	screen: 'like_new',
	frame: 'like_new',
	buttons: 'like_new',
	battery_life: 'like_new',
	camera: 'like_new'
};

function insertAd(company, model, storage, color, price, condition, createdAt, email) {
	Ads.insert({
		company: company, 
		model: model,
		storage: storage,
		color: color,
		price: price,
		condition: condition,
		createdAt: createdAt,
		email: email
	})
}

if(Ads.find().count() === 0) {

	// iPhones
	insertAd('Apple', 'iPhone 6', '128', 'Gold', 400, sampleCondition, new Date(), 'Ray@ray.bay');
	insertAd('Apple', 'iPhone 5', '32', 'Gold', 250, sampleCondition, new Date(), 'Ray@ray.bay');
	insertAd('Apple', 'iPhone 5s', '16', 'Silver', 320, sampleCondition, new Date(), 'Ray@ray.bay');
	insertAd('Apple', 'iPhone 5c', '16', 'White', 270, sampleCondition, new Date(), 'Ray@ray.bay');
	insertAd('Apple', 'iPhone 4', '16', 'Black', 100, sampleCondition, new Date(), 'Ray@ray.bay');
}

function insertTransaction(ad, seller_email, buyer_email, seller_address, buyer_address, trade_state) {
	Transactions.insert({
		ad: ad,
		seller_email: seller_email,
		buyer_email: buyer_email,
		seller_address: seller_address,
		buyer_address: buyer_address,
		trade_state: trade_state
	})	
}

if(Transactions.find().count() === 0) {
	var ads = Ads.find().fetch();
	for(var i = 0; i < ads.length; i++) {
		insertTransaction(ads[i], 'seller@test.com', 'buyer@test.com', 'address1', 'address2', BUYER_FOUND);
	}
}






