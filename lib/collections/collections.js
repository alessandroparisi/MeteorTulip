Phones = new Mongo.Collection('phones');
Ads = new Mongo.Collection('ads');

Meteor.methods({
  addAd: function (company, model, color, storage) {
    // Make sure the user is logged in before inserting a task

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Ads.insert({
      	company: company, 
		model: model,
		storage: storage,
		color: color,
     	createdAt: new Date(),
    	owner: Meteor.userId(),
    	username: Meteor.user().username
    });
  },
  payoutPaypal: function () {

    console.log("PAYOUT");

    Meteor.call("getPaypalToken");
  }
});

