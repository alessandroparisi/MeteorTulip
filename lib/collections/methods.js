Meteor.methods({
    addAd: function (phone, price, condition, account_info) {
        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        console.log("About to update seller profile");

        Profiles.update(
        { 
            userId : Meteor.userId() 
        }, 
        {
            "$set": 
            {
                address: account_info.seller_address,
                zip: account_info.seller_zip,
                city: account_info.seller_city,
                country: account_info.seller_country
            }
        });

        console.log("Updated seller profile");

        var ad = {
            company: phone.company, 
            model: phone.model,
            storage: phone.storage,
            price: price,
            color: phone.color,
            condition: condition,
            createdAt: new Date(),
            email: Meteor.user().emails[0].address
        };

        console.log("About to create the ad");

        Ads.insert(ad);
        
        console.log("About to create the transaction");

        var profile = Profiles.find({userId: Meteor.userId()}).fetch()[0];

        console.log(profile);

        Transactions.insert({
            ad: ad,
            seller_profile: profile,
            trade_state: TRADE_STATE.CREATED
        });
        
        console.log("Transaction created");
    },
    payoutPaypal: function () {
        console.log("PAYOUT");
        Meteor.call("getPaypalToken");
    }
});
