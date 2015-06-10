Meteor.publish('posts', function() {
	return Posts.find();
});

Meteor.publish('phones', function() {
	return Phones.find();
});