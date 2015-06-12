Template.admin.helpers({
	userAdminTemplateName: function() {
		return 'userAdmin';
	},
	transactionAdminTemplateName: function() {
		return 'transactionAdmin';
	},
	adAdminTemplateName: function() {
		return 'adAdmin';
	},
	convertTemplateNameToUrl: function(templateName) {
		return templateNameToUrl[templateName];
	},
	isActive: function (template) {
	  return (Session.get('admin-route') === template) ? 'active' : '';
	}
});

Template.admin.events({
	'click a.btn-admin-route': function(e) {
		Session.set('admin-route', e.target.dataset.route);		
	}
});

Template.admin.destroyed = function() {
	Session.set('admin-route', 'user-admin');
};

urlToTemplateName = {
	'user-admin': 'userAdmin',
	'transaction-admin': 'transactionAdmin',
	'ad-admin': 'adAdmin'
};

templateNameToUrl = {
	'userAdmin': 'userAdmin',
	'transactionAdmin': 'transaction-admin',
	'adAdmin': 'ad-admin'
};