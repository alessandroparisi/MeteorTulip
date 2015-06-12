Meteor.subscribe('userAdmin');

Template.userAdmin.helpers({
	users: function() {
		return Meteor.users.find();
	}
});

Template.userAdmin.events({
	'click button.btn-change-role': function(e) {
		e.preventDefault();
	}
});