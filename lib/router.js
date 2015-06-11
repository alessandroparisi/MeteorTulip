Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { 
		return Meteor.subscribe('searchAds', Session.get("filters")); 
	}
});

Router.route('/', {
	name: 'buySell'
});

Router.route('/buy', {
	name: 'buy'
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

Router.onBeforeAction('dataNotFound', { only: 'buy' });
//Router.onBeforeAction(requireLogin, { only: 'postSubmit' })