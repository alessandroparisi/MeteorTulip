Template.sellCondition.inheritsHelpersFrom("sell");

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
    }
});