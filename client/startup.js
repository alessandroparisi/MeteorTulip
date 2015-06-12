Meteor.startup(function(){
  resetFilters();
  Session.set('admin-route', "userAdmin");
});