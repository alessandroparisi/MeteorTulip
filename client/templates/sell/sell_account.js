Template.sellAccount.inheritsHelpersFrom("sell");

Template.sellAccount.helpers({
	username: function() {
    	var companies = _.uniq(Phones.find({}, {fields: {'company':1}}).fetch().map(function(x) { return x.company; }), true);
        return companies;
    },
    models: function() {
        var selectedCompany = Session.get("selectedCompany");
        var models = _.uniq(Phones.find({company: selectedCompany}, {fields: {'model':1}}).fetch().map(function(x) { return x.model; }), true);
        return models;
    },
    colors: function() {
        var selectedModel = Session.get("selectedModel");
        var colors = Phones.find({model: selectedModel}, {fields: {'color':1}}).fetch().map(function(x) { return x.color; });
        return colors[0];
    },  
    storages: function() {
        var selectedModel = Session.get("selectedModel");
        var storages = Phones.find({model: selectedModel}, {fields: {'storage':1}}).fetch().map(function(x) { return x.storage; });
        return storages[0];
    },
    picked: function() {
        return Session.get("selectedModel") && Session.get("selectedColor") && Session.get("selectedStorage");
    },
	filled: function (){
		return Session.get("selectedModel") && Session.get("selectedColor") && Session.get("selectedStorage");
	}
});

Template.sellAccount.events({
    "click #nextAccount": function(e){

        Session.set("selectedAddress", $("#inputAddress").val());
        Session.set("selectedCity", $("#inputCity").val());
        Session.set("selectedZip", $("#inputZip").val());
        Session.set("selectedCountry", $("#inputCountry").val());

        var phone = {
            company: Session.get("selectedCompany"),
            model: Session.get("selectedModel"),
            color: Session.get("selectedColor"),
            storage: Session.get("selectedStorage")
        };

        var price = Session.get('phonePrice');

        var condition = {
            screen: Session.get('screenCondition'),
            frame: Session.get('frameCondition'),
            buttons: Session.get('buttonsCondition'),
            battery_life: Session.get('batteryCondition'),
            camera: Session.get('cameraCondition')
        };

        var account_info = {
            seller_address: Session.get('selectedAddress'),
            seller_city: Session.get('selectedCity'), 
            seller_country: Session.get('selectedCountry'),
            seller_zip: Session.get('selectedZip') 
        };

        //TODO put after payment
        console.log("About call addAd");
        Meteor.call("addAd", 
            phone,
            price,
            condition,
            account_info
        );

        Session.set("sellTemplate", "sellPayment");
        Session.set("stepList", Session.get("stepList") + " > Payment");
    }
});