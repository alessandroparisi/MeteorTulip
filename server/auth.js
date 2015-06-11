Accounts.onCreateUser(function(options, user) {
  // Default all users to regular users
  Roles.addUsersToRoles(user, [REGULAR]);
  console.log('Added regular user role to: ' + user.username);
  return user;
});