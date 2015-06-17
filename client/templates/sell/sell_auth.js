// Template.sellAuth.inheritsHelpersFrom("sell");

Template.sellAuth.events({
    "click #nextAuth": function(e){

    	Session.set("selectedUsername", $("#inputUsername").val());
        Session.set("selectedEmail", $("#inputEmail").val());
        Session.set("selectedPassword", $("#inputPassword").val());
        Session.set("selectedRePassword", $("#inputRePassword").val());

        Session.set("sellTemplate", "sellAccount");
        Session.set("stepList", Session.get("stepList") + " > Account Information");
    }
});