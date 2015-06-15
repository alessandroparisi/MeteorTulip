Meteor.startup(function() {

	var insertUsers = function(){

	  var regularId = Accounts.createUser({
	    email : REGULAR + "@test.com",
	    password : REGULAR
	  });

	  var adminId = Accounts.createUser({
	    email : ADMIN + "@test.com",
	    password : ADMIN
	  });
	  
	  Roles.addUsersToRoles(regularId, [REGULAR]);
	  Roles.addUsersToRoles(adminId, [REGULAR, ADMIN]);
	};

	// TODO: fix this once we have transaction logic and stuff
	if(Meteor.users.find().count() === 0){
	  insertUsers();
	}
});