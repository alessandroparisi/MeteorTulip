Meteor.methods({
    addAd: function (company, model, color, storage) {
        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        var profile = Profiles.find({ _id : Meteor.userId() });

        var ad = {
            company: company, 
            model: model,
            storage: storage,
            price: price,
            color: color,
            condition: condition,
            createdAt: new Date(),
            email: Meteor.user().email
        };

        Ads.insert(ad);
        
        Transactions.insert({
            ad: ad,
            seller_email: Meteor.user().email,
            seller_address: "seller address",
            trade_state: TRADE_STATE.CREATED
        });
    },
    payoutPaypal: function () {
        console.log("PAYOUT");
        Meteor.call("getPaypalToken");
    }
});
