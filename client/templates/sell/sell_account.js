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
		return Session.get("selectedModel") && Session.get("selectedColor") && Session.get("selectedStorage")
	}
});

Template.sellAccount.events({
    "click #next": function(e){
        Session.set("sellTemplate", "sellPayment");
        Session.set("stepList", Session.get("stepList") + " > Payment");

        //TODO put at end of wizard
        // Meteor.call("addAd", Session.get("selectedCompany"), Session.get("selectedModel"), Session.get("selectedColor"), Session.get("selectedStorage"));
    }
});