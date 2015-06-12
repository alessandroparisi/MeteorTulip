Phones = new Mongo.Collection('phones');
Ads = new Mongo.Collection('ads');

Meteor.methods({
  addAd: function (company, model, color, storage) {
    // Make sure the user is logged in before inserting a task

	console.log("NEXT1");

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    console.log("NEXT2");

    Ads.insert({
      	company: company, 
		model: model,
		storage: storage,
		color: color,
     	createdAt: new Date(),
    	owner: Meteor.userId(),
    	username: Meteor.user().username
    });
  }
});