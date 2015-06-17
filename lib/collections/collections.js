Transactions = new Mongo.Collection('transactions');
Phones = new Mongo.Collection('phones');
Ads = new Mongo.Collection('ads');

AdminConfig = {
  collections: {
    Ads: {
    	tableColumns: [
        	{label: 'Company', name: 'company'},
            {label: 'Model', name: 'model'},
            {label: 'Storage', name: 'storage'},
            {label: 'Color', name: 'color'},
            {label: 'Creation Date', name: 'createdAt'},
            {label: 'Email', name: 'email'}
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
            {label: 'Seller\'s Email', name: 'seller_email'},
            {label: 'Seller\'s Address', name: 'seller_address'},
            {label: 'Buyer\'s Email', name: 'buyer_email'},
            {label: 'Buyer\'s Address', name: 'buyer_address'},
            {label: 'Price', name: 'ad.price'},
            {label: 'Trade state', name: 'trade_state'},
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

CONDITIONS = {
	FRAME_CONDITION: [
		'like_new',
		'scratches',
		'cracked'
	],
	SCREEN_CONDITION: [
		'like_new',
		'scratches',
		'cracked'
	],
	BUTTONS_CONDITION: [
		'like_new',
		'hard_to_press',
		'buttons_stuck'
	],
	BATTERY_LIFE: [
		'like_new',
		'70%_efficient',
		'50%_efficient'
	],	
	CAMERA_CONDITION: [
		'like_new',
		'blurred'
	]
};

ConditionsSchema = new SimpleSchema({
	frame: {
		type: String,
		allowedValues: CONDITIONS.FRAME_CONDITION
	},
	screen: {
		type: String,
		allowedValues: CONDITIONS.SCREEN_CONDITION
	},
	buttons: {
		type: String,
		allowedValues: CONDITIONS.BUTTONS_CONDITION
	},
	battery_life: {
		type: String,
		allowedValues: CONDITIONS.BATTERY_LIFE
	},
	camera: {
		type: String,
		allowedValues: CONDITIONS.CAMERA_CONDITION
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
		type: Number
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

TransactionsSchema = new SimpleSchema({
	ad: {
		type: AdsSchema
	},
	seller_email: {
		type: String
	},
	buyer_email: {
		type: String,
		optional: true
	},
	seller_address: {
		type: String
	},
	buyer_address: {
		type: String,
		optional: true
	},
	trade_state: {
		type: String
	}
});

Phones.attachSchema(PhonesSchema);
Ads.attachSchema(AdsSchema);
Transactions.attachSchema(TransactionsSchema);
