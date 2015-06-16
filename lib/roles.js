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
// TODO: Prevent users from using the site as that account
// We should also store their IP as information and possible
// IP ban in the future. 
ADMIN = 'admin';
REGULAR = 'regular';
BANNED = 'banned';

/**
	Description of transaction states

	Successful trade states
	- CREATED: When the ad is created
	- BUYER_FOUND
	- BOX_SHIPPED_TO_SELLER	
	- BOX_ARRIVED_AT_SELLER	
	- PRODUCT_SHIPPED_TO_BUYER
	- PRODUCT_ARRIVED_AT_BUYER
	- TRADE_COMPLETED

	Error trade states
	- BOX_LOST
	- PRODUCT_LOST	
*/

// Successful trade states
CREATED 					= 'created';
BUYER_FOUND					= 'buyer_found';
BOX_SHIPPED_TO_SELLER		= 'box_shipped';
BOX_ARRIVED_AT_SELLER		= 'box_arrived';
PRODUCT_SHIPPED_TO_BUYER	= 'product_shipped';
PRODUCT_ARRIVED_AT_BUYER	= 'product_arrived';
TRADE_COMPLETED				= 'trade_completed';

// Error trade states
BOX_LOST		= 'box_lost';
PRODUCT_LOST	= 'product_lost';

/**
	Phone quality states for different components
*/

QUALITY = {
	FRAME_CONDITION: [
		'like_new',
		'scratches',
		'cracked'
	],
	SCREEN_CONDITION: [
		'like_new',
		'scratches',
		'cracked'
	],
	BUTTONS_CONDITION: [
		'like_new',
		'hard_to_press',
		'buttons_stuck'
	],
	BATTERY_LIFE: [
		'like_new',
		'70%_efficient',
		'50%_efficient'
	],
	CAMERA_CONDITION: [
		'like_new',
		'blurred'
	]
};








