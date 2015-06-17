Phones = new Mongo.Collection('phones');
Profiles = new Mongo.Collection('profiles');
PhoneConditions = new Mongo.Collection('phoneConditions');
Ads = new Mongo.Collection('ads');
Transactions = new Mongo.Collection('transactions');

AdminConfig = {
  collections: {
    Ads: {
    	tableColumns: [
        	{label: 'Company', name: 'company'},
            {label: 'Model', name: 'model'},
            {label: 'Storage', name: 'storage'},
            {label: 'Color', name: 'color'},
            {label: 'Creation Date', name: 'createdAt'},
            {label: 'Screen condition', name: 'condition.screen'},
            {label: 'Frame condition', name: 'condition.frame'},
            {label: 'Buttons condition', name: 'condition.buttons'},
            {label: 'Battery Life', name: 'condition.battery_life'},
            {label: 'Camera condition', name: 'condition.camera'},
            {label: 'Seller\'s Email', name: 'email'}
        ]
    },
    Phones: {
    	tableColumns: [
        	{label: 'Company', name: 'company'},
            {label: 'Model', name: 'model'},
            {label: 'OS', name: 'os'},
            {label: 'Storage', name: 'storage'},
            {label: 'Color', name: 'color'},
            {label: 'Image URL', name: 'image_url'}
        ]
    },
    Transactions: {
    	tableColumns: [
            {label: 'Seller\'s Email', name: 'seller_profile.email'},
            {label: 'Seller\'s Address', name: 'seller_profile.address'},
            {label: 'Seller\'s Zip', name: 'seller_profile.zip'},
            {label: 'Seller\'s City', name: 'seller_profile.city'},
            {label: 'Seller\'s Country', name: 'seller_profile.country'},
            {label: 'Buyer\'s Email', name: 'buyer_profile.email'},
            {label: 'Buyer\'s Address', name: 'buyer_profile.address'},
            {label: 'Buyer\'s Zip', name: 'buyer_profile.zip'},
            {label: 'Buyer\'s City', name: 'buyer_profile.city'},
            {label: 'Buyer\'s Country', name: 'buyer_profile.country'},
            {label: 'Price', name: 'ad.price'},
            {label: 'Trade state', name: 'trade_state'}
        ]
    },
    PhoneConditions: {
    	tableColumns: [
            {label: 'Title', name: 'title'},
            {label: 'id', name: 'id'}
    	]
    },
    Profiles: {
    	tableColumns: [
    		{label: 'User id', name: 'userId'},
    		{label: 'User email', name: 'email'},
    		{label: 'Address', name: 'address'},
    		{label: 'Zip', name: 'zip'},
    		{label: 'City', name: 'city'},
    		{label: 'Country', name: 'country'}
    	]
    }
  }
};

PhonesSchema = new SimpleSchema({
	os: {
		type: String
	},
	company: {
		type: String
	},
	model: {
		type: String
	},
	storage: {
		type: [String]
	},
	color: {
		type: [String]
	},
	image_url: {
		type: String
	}
});

ConditionsSchema = new SimpleSchema({
	frame: {
		type: String,
		allowedValues: ['like_new', 'scratches', 'cracks']
	},
	screen: {
		type: String,
		allowedValues: ['like_new', 'scratches', 'cracks']
	},
	buttons: {
		type: String,
		allowedValues: ['like_new', 'hard_to_press', 'buttons_stuck']
	},
	battery_life: {
		type: String,
		allowedValues: ['like_new', 'high_efficiency', 'mid_efficiency', 'low_efficiency']
	},
	camera: {
		type: String,
		allowedValues: ['like_new', 'broken']
	}	
});

AdsSchema = new SimpleSchema({
	company: {
		type: String
	},
	model: {
		type: String
	},
	storage: {
		type: String
	},
	color: {
		type: String
	},
	price: {
		type: String
	},
	condition: {
		type: ConditionsSchema
	},
	createdAt: {
		type: Date
	},
	email: {
		type: String
	}
});


ProfilesSchema = new SimpleSchema({
  	userId: {
  		type: String
  	},  	
  	email: {
  		type: String
  	},
  	address: {
  		type: String,
  		optional: true
  	},
  	zip: {
  		type: String,
  		optional: true
  	},
  	city: {
  		type: String,
  		optional: true
  	},
  	country: {
  		type: String,
  		optional: true
  	}
});

TransactionsSchema = new SimpleSchema({
	ad: {
		type: AdsSchema
	},
	seller_profile: {
		type: ProfilesSchema,
	},
	buyer_profile: {
		type: ProfilesSchema,
		optional: true
	},
	trade_state: {
		type: String
	}
});

FormsSchema = new SimpleSchema({
	form_val: {
		type: String
	},
	real_val: {
		type: String
	}
});

PhoneConditionsSchema = new SimpleSchema({
	title: {
		type: String
	},
	id: {
		type: String
	},
	form: {
		type: [FormsSchema]
	}
});

Phones.attachSchema(PhonesSchema);
Profiles.attachSchema(ProfilesSchema);
Ads.attachSchema(AdsSchema);
Transactions.attachSchema(TransactionsSchema);
PhoneConditions.attachSchema(PhoneConditionsSchema);