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
	},
	selectedSpecs: function (){
		return Session.get("selectedSpecs");
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

    Session.set("frameCondition", "");
    Session.set("screenCondition", "");
    Session.set("buttonsCondition", "");
    Session.set("cameraCondition", "");
    Session.set("batteryCondition", "");

    Session.set("selectedUsername", "");
    Session.set("selectedEmail", "");
    Session.set("selectedPassword", "");
    Session.set("selectedRePassword", "");

    Session.set("selectedAddress", "");
    Session.set("selectedCity", "");
    Session.set("selectedZip", "");
    Session.set("selectedCountry", "");

    Session.set("selectedSpecs", false);
}
Template.sell.events({
    "click #company": function(e){
        //TODO for some weird reason, e.target.innerText is empty string
        Session.set("selectedCompany", e.currentTarget.innerText);
        Session.set("selectedModel", "");
    },
    "click #model": function(e){
        Session.set("selectedModel", e.target.innerText);
        Session.set("selectedColor", "");
        Session.set("selectedStorage", "");
    },
    "click #color": function(e){
        Session.set("selectedColor", e.target.innerText);
    },
    "click #storage": function(e){
        Session.set("selectedStorage", e.target.innerText);
    },
    "click #next": function(e){
        console.log("calling addAD");
        Meteor.call("addAd", Session.get("selectedCompany"), Session.get("selectedModel"), Session.get("selectedColor"), Session.get("selectedStorage"));
        console.log("addAD called");
    }
});

Template.sell.destroyed = function(){
	Session.set("sellTemplate", "sellSpecs");
	Session.set("stepList", "");

    Session.set("selectedCompany", "");
    Session.set("selectedModel", "");
    Session.set("selectedColor", "");
    Session.set("selectedStorage", "");

    Session.set("frameCondition", "");
    Session.set("screenCondition", "");
    Session.set("buttonsCondition", "");
    Session.set("cameraCondition", "");
    Session.set("batteryCondition", "");

    Session.set("selectedUsername", "");
    Session.set("selectedEmail", "");
    Session.set("selectedPassword", "");
    Session.set("selectedRePassword", "");
    
    Session.set("selectedAddress", "");
    Session.set("selectedCity", "");
    Session.set("selectedZip", "");
    Session.set("selectedCountry", "");
    
    Session.set("selectedSpecs", false);
}
