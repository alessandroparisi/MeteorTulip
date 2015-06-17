Accounts.onCreateUser(function(options, user) {
  // Default all users to regular users
  Roles.addUsersToRoles(user, [REGULAR]);
  
  // Attach a profile to a user
  Profiles.insert({
  	email: user.emails[0].address,
  	userId: user._id
  });
  
  return user;
});