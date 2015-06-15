Phones = new Mongo.Collection('phones');
Ads = new Mongo.Collection('ads');

AdminConfig = {
  collections: {
    Ads: {},
    Phones: {
    	tableColumns: [
    		
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
	email: {
		type: String
	}
});

Phones.attachSchema(PhonesSchema);
Ads.attachSchema(AdsSchema);