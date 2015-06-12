Accounts.onCreateUser(function(options, user) {
  // Default all users to regular users
  Roles.addUsersToRoles(user, [REGULAR]);
  return user;
});