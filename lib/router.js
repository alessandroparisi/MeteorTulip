Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/buy/phone/:_id', {
  name: 'buySubmit',
  data: function() { 
  	return Ads.findOne(this.params._id); 
  }
});

Router.route('/', {
	name: 'buySell'
});

Router.route('/buy', {
	name: "buy"
})

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

Router.route('/paypalCallback', {
	where: 'server',
	action: function() { 
		console.log("BAKA");
		Meteor.call('callBackendCode', this.params, function(err, res) {
			console.log('got the response');
			console.log(res);
		});
	}
})


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

var setSessionFilters = function(){

	var allFilters = Session.get("filters");
	
	var queryParams = this.params.query;

	var companyParam = queryParams.company;
	var company = _.isUndefined(companyParam) ? "" : companyParam;
	allFilters.company = company;

	var modelParam = queryParams.model;
	var model = _.isUndefined(modelParam) ? "" : modelParam;
	allFilters.model = model;

	var storagesParam = queryParams.storages;
	var storages = _.isUndefined(storagesParam) ? [] : storagesParam.split("-");
	allFilters.storages = storages;

	var colorsParam = queryParams.colors;
	var colors = _.isUndefined(colorsParam) ? [] : colorsParam.split("-");
	allFilters.colors = colors;

	Session.set("filters", allFilters);
	this.next();
};

Router.onBeforeAction(setSessionFilters, {only: ['buy']});
Router.onBeforeAction(requireLogin, { only: ['profile', 'admin', 'buySubmit'] });
// Router.onBeforeAction(requireAdmin, { only: ['admin'] });
Router.onBeforeAction('dataNotFound', { only: 'profile' });
