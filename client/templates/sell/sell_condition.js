Template.sellCondition.inheritsHelpersFrom("sell");

Template.sellCondition.helpers({
    priceSet: function() {
        return !!Session.get('phonePrice');
    }
});

// When the template is rendered, set initial values of the sessions
Template.sellCondition.onRendered(function() {
    Session.set("frameCondition", $('#frameCondition').val());
    Session.set("screenCondition", $('#screenCondition').val());
    Session.set("buttonsCondition", $('#buttonsCondition').val());
    Session.set("cameraCondition", $('#cameraCondition').val());
    Session.set("batteryCondition", $('#batteryCondition').val());
});

Template.sellCondition.events({
    "click #nextCondition": function (e){
        if(Meteor.userId()){
            Session.set("sellTemplate", "sellAccount");
            Session.set("stepList", Session.get("stepList") + " > Account Information");
        } else {
            Session.set("sellTemplate", "sellAuth");
            Session.set("stepList", Session.get("stepList") + " > Authentication");
        }
    },
    'change #frameCondition': function (e){
        Session.set("frameCondition", e.target.value);
    },
    'change #screenCondition': function (e){
        Session.set("screenCondition", e.target.value);
    },
    'change #buttonsCondition': function (e){
        Session.set("buttonsCondition", e.target.value);
    },
    'change #cameraCondition': function (e){
        Session.set("cameraCondition", e.target.value);
    },
    'change #batteryCondition': function (e){
        Session.set("batteryCondition", e.target.value);
    },
    'keyup input#phonePrice': function (e){
        // typeof Session.get("phonePrice") === "string"
        Session.set("phonePrice", e.currentTarget.value);
    }

});