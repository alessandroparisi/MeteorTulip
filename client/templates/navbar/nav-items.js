Template.navItems.helpers({
	activeIfTemplateIs: function (template) {
	  var currentRoute = Router.current();
	  return (currentRoute && template === currentRoute.lookupTemplate().toLowerCase()) ? 'active' : '';
	}
});