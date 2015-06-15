Meteor.publish('phones', function() {
	return Phones.find();
});

Meteor.publish('searchAds', function (filters, limit) { // tags is an array of tag ids ['foo', 'baz']


	//TODO filters.company is null sometimes but why? shouldn't the on startup work?
	//Not like the app crashes but I dont even get it... like even when checking if its null it still gives error
	//Maybe with undefined checks and null checks of filters it might not crash? So far no crash
    var companyFilter = _.isUndefined(filters) || _.isNull(filters) || _.isNull(filters.company) || filters.company === "" ? new RegExp(".*") : filters.company;
    var modelFilter = _.isUndefined(filters) || _.isNull(filters) || _.isNull(filters.model) || filters.model === "" ? new RegExp(".*") : filters.model;
    var storageFilter = _.isUndefined(filters) || _.isNull(filters) || _.isNull(filters.storages) || _.isEmpty(filters.storages) ? [new RegExp(".*")] : filters.storages;
    var colorFilter = _.isUndefined(filters) || _.isNull(filters) || _.isNull(filters.colors) || _.isEmpty(filters.colors) ? [new RegExp(".*")] : filters.colors;

	return Ads.find(
	{
		company: companyFilter, 
		model: modelFilter, 
		storage: {$in: storageFilter}, 
		color: {$in: colorFilter}
	},
	{
		sort: 
		{
			createdAt: -1
		},
		limit: limit
	});
});

// Meteor.publish('userAdmin', function() {
// 	// Only allow admin users to view all users
// 	if(Roles.userIsInRole(this.userId, [ADMIN])) {
// 		return Meteor.users.find({}, {
// 			fields: {
// 				'username': 1,
// 				'roles': 1,
// 				'createdAt': 1
// 			}
// 		});
// 	}
// 	else {
// 		this.stop();
// 		return;
// 	}
// });

