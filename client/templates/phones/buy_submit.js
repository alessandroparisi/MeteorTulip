Template.buySubmit.events = {
  'keyup .form-control': function (e) {
        var valid = true;

        //TODO do checks to make sure info is correct, and if not show feedback to user
        if(!isValidAdress($("#inputAddress").val())){
            valid = false;
        }
        if(!isValidZip($("#inputZip").val())){
            valid = false;
        } 
        if(!isValidCity($("#inputCity").val())){
            valid = false;
        }
        if(!isValidCountry($("#inputCountry").val())){
            valid = false;
        }

        if(valid){
            $("#paypal-button-buy").prop('disabled', false);
        }
        else{
            $("#paypal-button-buy").prop('disabled', true);
        }
  }
};


var isValidAdress = function (text){
    return text !== "";
}
var isValidZip = function (text){
    return text !== "";
}
var isValidCity = function (text){
    return text !== "";
}
var isValidCountry = function (text){
    return text !== "";
}
