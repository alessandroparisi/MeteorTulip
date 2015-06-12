/**
	The way roles work is the following:

	An admin has extra permission and can use the admin interface
	A regular user can use all the website's functionalities except the admin interface
	A banned user cannot log into his account and has access to no part of the website

	ADMINS, N.B.
	- When adding the role ADMIN to a user, it has to be ensured that this user 
	also has the role REGULAR
	- When adding the role BANNED to a user, it has to be ensured that this user
	was REMOVED from the role REGULAR and ADMIN
*/


// ROLE LIST
ADMIN = 'admin';
REGULAR = 'regular';
BANNED = 'banned';