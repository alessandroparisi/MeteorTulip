Template.sell.helpers({
    companies: function() {
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
    }
});

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
        Meteor.call("addAd", Session.get("selectedCompany"), Session.get("selectedModel"), Session.get("selectedColor"), Session.get("selectedStorage"));
    }
});