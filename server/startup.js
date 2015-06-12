Meteor.startup(function() {

	var insertUsers = function(){

	  var regularId = Accounts.createUser({
	    username : REGULAR,
	    password : REGULAR
	  });

	  var adminId = Accounts.createUser({
	    username : ADMIN,
	    password : ADMIN
	  });
	  
	  Roles.addUsersToRoles(regularId, [REGULAR]);
	  Roles.addUsersToRoles(adminId, [REGULAR, ADMIN]);
	};

	// Recreate users everytime
	// TODO: fix this once we have transaction logic and stuff
	if(Meteor.users.find().count() === 0){
	  insertUsers();
	}
});