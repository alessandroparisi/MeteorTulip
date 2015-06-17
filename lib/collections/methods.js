Meteor.methods({
  addAd: function (company, model, color, storage) {
    // Make sure the user is logged in before inserting a task

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    console.log("About to insert");

    Ads.insert({
      company: company, 
  		model: model,
  		storage: storage,
  		color: color,
     	createdAt: new Date(),
    	email: Meteor.user().emails[0].address
    });

    console.log("Inserted");
  }
});