Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { 
		return Meteor.subscribe('phones'); 
	}
});

Router.route('/', {
	name: 'buySell'
});

Router.route('/buy', {
	name: 'buy'
});

Router.route('/sell', {
	name: 'sell'
});

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

Router.route('/admin', {
	name: 'admin'
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

Router.onBeforeAction(requireLogin, { only: ['profile', 'buy', 'admin'] });
Router.onBeforeAction(requireAdmin, { only: ['admin'] });
Router.onBeforeAction('dataNotFound', { only: 'buy' });
