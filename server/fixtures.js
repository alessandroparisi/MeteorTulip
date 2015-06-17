function insertPhone(OS, company, model, storage, color, image_url) {
	Phones.insert({
		os: OS, // at first only iOS or Android. Maybe blackberry and others later.
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

var sampleCondition = {
	screen: 'like_new',
	frame: 'like_new',
	buttons: 'like_new',
	battery_life: 'like_new',
	camera: 'like_new'
};

if(Ads.find().count() === 0) {

	// iPhones
	insertAd('Apple', 'iPhone 6', '16', 'Gold', 400, sampleCondition, new Date(), 'ray@bay.bay');
	insertAd('Apple', 'iPhone 5', '32', 'Gold', 200, sampleCondition, new Date(), 'ray@bay.bay');
	insertAd('Apple', 'iPhone 5s', '16', 'Silver', 300, sampleCondition, new Date(), 'ray@bay.bay');
	insertAd('Apple', 'iPhone 5c', '16', 'White', 250, sampleCondition, new Date(), 'ray@bay.bay');
	insertAd('Apple', 'iPhone 4', '16', 'Black', 100, sampleCondition, new Date(), 'ray@bay.bay');

}

// var sampleProfile = Profiles.findOne({userId: Users.find({}).fetch()[0]._id});

// function insertTransaction(ad, seller_email, trade_state) {
// 	Transactions.insert({
// 		ad: ad,
// 		seller_profile: seller_email,
// 		trade_state: trade_state
// 	})	
// }

// if(Transactions.find().count() === 0) {
// 	var ads = Ads.find().fetch();
// 	for(var i = 0; i < ads.length; i++) {
// 		insertTransaction(ads[i], sampleProfile, TRADE_STATE.CREATED);
// 	}
// }

function createConditionObject(form_val, real_val) {
	return {
		form_val: form_val,
		real_val: real_val
	};
}

var conditions = [
	{
		title: 'Frame Condition',
		id: 'frameCondition',
		form: [
			createConditionObject('like_new', 'Like New'),
			createConditionObject('scratches', 'Scratches'),
			createConditionObject('cracks', 'Cracks')
		]
	},
	{
		title: 'Screen Condition',
		id: 'screenCondition',
		form: [
			createConditionObject('like_new', 'Like New'),
			createConditionObject('scratches', 'Scratches'),
			createConditionObject('cracks', 'Cracks')
		]
	},
	{
		title: 'Buttons Condition',
		id: 'buttonsCondition',
		form: [
			createConditionObject('like_new', 'Like New'),
			createConditionObject('hard_to_press', 'Hard to press'),
			createConditionObject('buttons_stuck', 'Stuck')
		]
	},
	{
		title: 'Battery Life',
		id: 'batteryCondition',
		form: [
			createConditionObject('like_new', 'Like New'),
			createConditionObject('high_efficiency', '70% and above'),
			createConditionObject('mid_efficiency', '50% and above'),
			createConditionObject('low_efficiency', 'Less than 50%')
		]
	},
	{
		title: 'Camera Condition',
		id: 'cameraCondition',
		form: [
			createConditionObject('like_new', 'Like New'),
			createConditionObject('broken', 'Broken')
		]
	}
];

if(PhoneConditions.find().count() === 0) {
	for(var i = 0; i < conditions.length; i++) {
		PhoneConditions.insert(conditions[i]);
	}
}

