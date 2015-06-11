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