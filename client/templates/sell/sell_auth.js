Template.sellAuth.inheritsHelpersFrom("sell");

Template.sellAuth.events({
    "click #nextAuth": function(e){
        Session.set("sellTemplate", "sellAccount");
        Session.set("stepList", Session.get("stepList") + " > Account Information");

        //TODO 
        console.log($("#inputUsername").val());

        //TODO put at end of wizard
        // Meteor.call("addAd", Session.get("selectedCompany"), Session.get("selectedModel"), Session.get("selectedColor"), Session.get("selectedStorage"));
    }
});