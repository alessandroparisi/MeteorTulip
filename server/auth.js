Accounts.onCreateUser(function(options, user) {
  // Default all users to regular users
  Roles.addUsersToRoles(user, [REGULAR]);
  // Attach a profile to a user
  Profiles.insert({
  	userId: user._id,
  	email: user.email
  });
  
  return user;
});