Template.filterInfo.helpers({
  isSelectedCompany: function(company){
    var filters = Session.get("filters");
    return company === filters.company;
  },
  isSelectedModel: function(model){
    var filters = Session.get("filters");
    return model === filters.model;
  },
  isSelectedColor: function(color){
    var filters = Session.get("filters");
    return filters.colors.indexOf(color) > -1;
  },
  isSelectedStorage: function(storage){
    var filters = Session.get("filters");
    return filters.storages.indexOf(storage) > -1;
  },
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
    var colors = Phones.find({company: filters.company, model: filters.model}, {fields: {'color':1}}).fetch().map(function(x) { return x.color; });
    return colors[0];
  },  
  storages: function() {
    var filters = Session.get("filters");
    var storages = Phones.find({company: filters.company, model: filters.model}, {fields: {'storage':1}}).fetch().map(function(x) { return x.storage; });
    return storages[0];
  }

});
Template.filterInfo.destroyed = function(){
  resetFilters();
}


//TODO I can fix the route.go to make a function that will take in the filters and 
//route appropriately (Set query params)
//Not sure about the case where they Click apple, should we keep the model param?
//TODO restructure this when we have a better idea about what were doing
Template.filterInfo.events({
  'change .checkbox':function(e){

    var myName = e.target.name;
    var myId = e.target.id;

    var q = Router.current().params.query;

    //if check box is checked add it, if its not remove it the item
    if(e.target.checked){
      if(_.isUndefined(q[myName])){
        q[myName] = myId;
      }
      else{
        q[myName] = q[myName] + "-" + myId;
      }
    }
    else{
      if(!_.isUndefined(q[myName])){
        var arr = q[myName].split("-");
        if(!_.isEmpty(arr)){
          var index = arr.indexOf(e.target.id);
          arr.splice(index, 1);
          if(_.isEmpty(arr)){
            delete(q[myName]);
          }
          else{
            q[myName] = arr.join("-");
          }
        }
      }
    }

    //add the query string and go to route
    Router.go('buy', {}, {
      query: q
    });
  },
  'change .filterRadio :input':function(e){
    var allFilters = Session.get("filters");
    var myId = e.target.id;
    var myName = e.target.name;

    allFilters["storages"] = [];
    allFilters["colors"] = [];

    //add the query string and go to route
    var q = Router.current().params.query;
    console.log(q);
    q[myName] = myId;
    Router.go('buy', {}, {
      query: q
    });
  }
});
