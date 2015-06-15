Template.buy.helpers({
  phoneRows: function() {
  	var phones = Ads.find({}).fetch();
  	var size = 4;
  	var chunks = [];
  	while(phones.length > size) {
  		chunks.push({ row: phones.slice(0, size) });
  		phones = phones.slice(size);
  	}
  	chunks.push({row: phones});
  	return chunks;
  },

  // loadInitialPage: function (){
  //   console.log("count: " + count);
  //   console.log("adcount: " + adCount);
  //   if($(".hiddenAd").length >= adCount){
  //     initialAnimate();
  //   }
  // }
});

var count = 0;
var adCount = 0;

var canScroll = true;

var PAGE_SIZE = 16;
var load_offset = 2/3;
var MAX_ADS = 100;

$(window).scroll(function(){
  if(Session.get("limit") < MAX_ADS){
    if($(window).scrollTop() > ($(document).height() - $(window).height())*load_offset && canScroll){
      Session.set("limit", Session.get("limit") + PAGE_SIZE);
      canScroll = false;
    }
  }
  $(".hiddenAd").each(function(){
    if(checkVisible($(this))){
      if($(this).css("opacity") === "0"){
        $(this).animate({opacity: 1});
      }
    }
  });
});


var initialAnimate = function(){
  $(".hiddenAd").each(function(){
    console.log($(this));
    if(checkVisible($(this))){
      if($(this).css("opacity") === "0"){
        $(this).animate({opacity: 1});
      }
    }
  });
}

function checkVisible(elm) {
  var vpH = $(window).height();
  var st = $(window).scrollTop();
  var y = $(elm).offset().top;
  var elementHeight = $(elm).height();

  return ((y + elementHeight/2 < (vpH + st)));
}

Deps.autorun(function() {
  Meteor.subscribe('searchAds', Session.get("filters"), Session.get("limit"));
  //adCount = Ads.find({}).count();
  canScroll = true;
});


// function makeStrFromArr(array) {
// 	var str = '';
// 	for(var i = 0; i < array.length; i++) {
// 		str += array[i];
// 		if(i !==  array.length - 1) {
// 			str += ", ";
// 		}
// 	}
// 	return str;
// }
