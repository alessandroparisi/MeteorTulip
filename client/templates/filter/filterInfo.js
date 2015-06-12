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
Template.filterInfo.destroyed = function(){
  resetFilters();
}

Meteor.startup(function(){
  resetFilters();
});

var resetFilters = function(){
  var filters = {
    "company": "",
    "model" : "",
    "storages": [],
    "colors": []
  }
  Session.set("filters", filters);
}

Template.filterInfo.events({
  'change .checkbox':function(e){

    //Get and make a copy of filters
    var allFilters = Session.get("filters");
    var allFilters = _.extend({}, allFilters);

    var name = e.target.name;

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
    //console.log(f);
  },
  'click .radio':function(e){

    var allFilters = Session.get("filters");
    var myName = e.target.name;
    allFilters[myName] = e.target.id;

    //Deselect all model radio buttons and remove them from filters
    if(myName === "company"){
      allFilters["model"] = "";
      var radioButtons = getArrayFromTag(document.getElementsByName("model"));
      for(var i=0; i<radioButtons.length; i++){
        radioButtons[i].checked = false;
      }
    }

    //deselect all checkboxes
    allFilters["storages"] = [];
    allFilters["colors"] = [];
    var storageCheckBoxes = getArrayFromTag(document.getElementsByName("storages"));
    var colorCheckBoxes = getArrayFromTag(document.getElementsByName("colors"));
    var checkBoxes = _.union(storageCheckBoxes, colorCheckBoxes);
    for(var i=0; i<checkBoxes.length; i++){
      checkBoxes[i].checked = false;
    }

    Session.set("filters", allFilters);
  }

});
