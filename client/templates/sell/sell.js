Template.sell.helpers({
	sellTemplate: function (){
		return Session.get("sellTemplate");
	},
	stepList: function (){
		return Session.get("stepList");
	},
	//TODO curent step
	currentStep: function (){
		return Session.get("currentStep");
	},
	selectedCompany: function (){
		return Session.get("selectedCompany");
	},
	selectedModel: function (){
		return Session.get("selectedModel");
	},
	selectedColor: function (){
		return Session.get("selectedColor");
	},
	selectedStorage: function (){
		return Session.get("selectedStorage");
	}
});

Template.sell.created = function(){
	Session.set("sellTemplate", "sellSpecs");

	//TODO need actual progress
	Session.set("stepList", "Phone Specifications");

    Session.set("selectedCompany", "");
    Session.set("selectedModel", "");
    Session.set("selectedColor", "");
    Session.set("selectedStorage", "");
}

Template.sell.destroyed = function(){
	Session.set("sellTemplate", "sellSpecs");
	Session.set("stepList", "");
    Session.set("selectedCompany", "");
    Session.set("selectedModel", "");
    Session.set("selectedColor", "");
    Session.set("selectedStorage", "");
}

Template.sell.events({
	"click #paypal": function(e){

		console.log("clicked paypal");

        Meteor.call("payoutPaypal");
    }
});