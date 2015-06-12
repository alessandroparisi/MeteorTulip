Meteor.publish('phones', function() {
	return Phones.find();
});

Meteor.publish('searchAds', function (filters) { // tags is an array of tag ids ['foo', 'baz']

    var companyFilter = filters.company === "" ? new RegExp(".*") : filters.company;
    var modelFilter = filters.model === "" ? new RegExp(".*") : filters.model;
    var storageFilter = _.isEmpty(filters.storages) ? [new RegExp(".*")] : filters.storages;
    var colorFilter = _.isEmpty(filters.colors) ? [new RegExp(".*")] : filters.colors;

	return Ads.find({
		company: companyFilter, 
		model: modelFilter, 
		storage: {$in: storageFilter}, 
		color: {$in: colorFilter}
	});
});

