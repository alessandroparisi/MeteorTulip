Template.admin.helpers({
	getTemplate: function() {
		return Session.get('admin-route');
	}
});

Template.admin.events({
	'click .btn-admin-route': function(e) {
		e.preventDefault();
		Session.set('admin-route', e.target.dataset.route);
	}
});