Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/buy/:_id', {
  name: 'adPage',
  data: function() { 
  	return Ads.findOne(this.params._id); 
  }
});

Router.route('/', {
	name: 'buySell'
});

Router.route('/buy', {
	name: 'buy',
});

Router.route('/sell', {
	name: 'sell'
});

Router.route('/sell/info', {
	name: 'sellInfo'
})

Router.route('/profile', {
	name: 'profile',
	data: function() {
		if(Meteor.user()) {
			return Meteor.user();
		} else {
			this.render('buySell');
		}
	}
});

// ADMIN ROUTING
Router.route('/admin', {
	name: 'adminNoType',
	onBeforeAction: function() {
		this.render('/admin', {templateName: '/user-admin'});
	}
});

Router.route('/admin/:adminType', {
	name: 'admin',
	data: function() {
		// Check if param is set
		if(_.isUndefined(this.params.adminType)) {
			Session.set('admin-route', 'userAdmin');
			Router.go('/admin/user-admin');
		}
		// If set, check if it is one of the known params
		else if(_.isUndefined(urlToTemplateName[this.params.adminType])) {
			Session.set('admin-route', 'userAdmin');
			Router.go('/admin/user-admin');
		}
		// otherwise, link the admin page according to the url
		tpmlName = urlToTemplateName[this.params.adminType];
		Session.set('admin-route', tpmlName);
		return {
			templateName: tpmlName
		}
	}
});

var requireAdmin = function() {
	if ( ! Roles.userIsInRole(Meteor.userId(), ADMIN)) {
		Router.go('/');
	} else {
		this.next(); 
	}
};

var requireLogin = function() { 
	if (! Meteor.user()) {
		if(Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('accessDenied'); 
		}
	} else {
		this.next(); 
	}
};

Router.onBeforeAction(requireLogin, { only: ['profile', 'sell', 'admin', 'sellInfo'] });
Router.onBeforeAction(requireAdmin, { only: ['admin'] });
Router.onBeforeAction('dataNotFound', { only: 'profile' });