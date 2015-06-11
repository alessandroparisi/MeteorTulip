Meteor.publish('phones', function() {
	return Phones.find();
});

Meteor.publish('searchAds', function (filters) { // tags is an array of tag ids ['foo', 'baz']

    // return Users.find({ _id: {$in: userIds } });
 //    if(_.isUndefined(filters) || _.isNull(filters) || _.isUndefined(filters.storage) || _.isEmpty(filters.storage)){
	// 	return Phones.find();
	// }
	// else{
	// 	return Phones.find({capacities: {$in: filters.storage}})
	// }
    //return Phones.find();
	if(_.isEmpty(filters.company)){
		console.log(Ads.find().fetch());
		return Ads.find();
	}
	else{
		if(_.isEmpty(filters.model)){
			return Ads.find({company: filters.company})
		}
		else{
			if(_.isEmpty(filters.storages) && _.isEmpty(filters.colors)){
				return Ads.find({company: filters.company, model: filters.model});
			}
			else if(_.isEmpty(filters.storages)){
				return Ads.find({company: filters.company, model: filters.model, color: {$in: filters.colors}});
			}
			else if(_.isEmpty(filters.colors)){
				return Ads.find({company: filters.company, model: filters.model, storage: {$in: filters.storages}});
			}
			else{
				return Ads.find({company: {$in: filters.company}, model: filters.model, storage: {$in: filters.storages}, color: {$in: filters.colors}});
			}
		}
	}
});

