Template.filterInfo.helpers({
  companies: function() {
    var companies = _.uniq(Phones.find({}, {fields: {'company':1}}).fetch().map(function(x) { return x.company; }), true);
    return companies;
  },
  models: function() {
    var filters = Session.get("filters");
    var models = _.uniq(Phones.find({company: filters.company}, {fields: {'model':1}}).fetch().map(function(x) { return x.model; }), true);
    return models;
  },
  colors: function() {
    var filters = Session.get("filters");
    var colors = Phones.find({model: filters.model}, {fields: {'color':1}}).fetch().map(function(x) { return x.color; });
    return colors[0];
  },  
  storages: function() {
    var filters = Session.get("filters");
    var storages = Phones.find({model: filters.model}, {fields: {'storage':1}}).fetch().map(function(x) { return x.storage; });
    return storages[0];
  }

});

Meteor.startup(function(){
  var filters = {
    "company": "",
    "model" : "",
    "storages": [],
    "colors": []
  }
  Session.set("filters", filters);
});

Template.filterInfo.events({
  'change .checkbox':function(e){
    //Get and make a copy of filters
    var allFilters = Session.get("filters");
    var allFilters = _.extend({}, allFilters);

    var name = e.target.name;
    // //TODO make sessions object wiht empty stuff on start
    // //TODO Maybe not idk yoloswag
    // if(_.isUndefined(allFilters[name])) {
    //   allFilters[name] = [];
    // }

    //Get the specific filter array
    var specificFilter = allFilters[name];

    //if check box is checked add it, if its not remove it the item
    if(e.target.checked){
      specificFilter.push(e.target.id);

    }
    else{
      var index = specificFilter.indexOf(e.target.id);
      specificFilter.splice(index, 1);
    }

    //Update the session filters
    Session.set("filters", allFilters);

    var f = Session.get("filters");
    console.log(f);
  },
  'click .radio':function(e){
    var allFilters = Session.get("filters");
    var name = e.target.name;
    allFilters[name] = e.target.id;
    Session.set("filters", allFilters);
  }

});