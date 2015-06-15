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
            {label: 'Username', name: 'username'}
        ]
    },
    Phones: {
    	tableColumns: [
        	{label: 'Company', name: 'company'},
            {label: 'Model', name: 'model'},
            {label: 'OS', name: 'os'},
            {label: 'Storage', name: 'storage'},
            {label: 'Color', name: 'color'}
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
	createdAt: {
		type: Date,
		label: 'Date created'
	},
	username: {
		type: String
	}
});

Phones.attachSchema(PhonesSchema);
Ads.attachSchema(AdsSchema);