$(document).ready(function() {
//Input zip code-Page 1

//Submit zip
$('#zip-submit').on('click', function(event) {
  event.preventDefault();
  //grab zip
  var zipcode = $('#zip-input').val().trim();

  //call API to find state of zip-input
  var key = "AIzaSyAaK5LW94pb1MJ1T8qZ_am1xvXEdwEuC0w";
  var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=" + key;;
  console.log(queryURL);

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      console.log(response);
      var results = response.results[0].address_components;
      var city = results[1].long_name;
      var stateAbv = results[4].short_name;

      $('#zip-input').val("");

      location.href = "budget.html";



    })

});

//Values of Inputs
// var firstIncome = $('#income-amount-input').val().trim();
// var housingInput = $('#housing-amount-input').val().trim();
// var utilityInput = $('#utilities-amount-input').val().trim();
// var gasInput = $('#gas-amount-input').val().trim();

// Dynamic add to results.
var resultsDiv = $("<div class='next-result'>");
var resultsDiv1 = $("<div class='next-result1'>");
$('#housing-amount-input').keyup(function() {
  $(".results-text").html("<h4> Housing </h4>" + $('#housing-amount-input').val().trim());
  $(".results-text").append(resultsDiv);
})

$('#utilities-amount-input').keyup(function() {
  $('.next-result').html("<h4> Utilities </h4>" + $("#utilities-amount-input").val().trim());
  $(".results-text").append(resultsDiv);
})
$('#gas-amount-input').keyup(function() {
  $('.next-result1').html("<h4> Gas </h4>" + $("#gas-amount-input").val().trim());
  $(".results-text").append(resultsDiv1);
})







// Adding income button function.
$("#add-income").click(function() {
  $("#income-block").append("<div class='row repeating-income-row'> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='input-group'> <input type='text' class='form-control' id='income-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");
});
// Adding expense button function.
$("#add-expense").click(function() {
  $("#expenses-block").append("<div class='row repeating-expenses-row'> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-label-input' aria-describedby='basic-addon1' placeholder='Type your custom input label here.'> </div> <br> </div> <div class='col-md-6'> <div class='expenses-group'> <input type='text' class='form-control' id='expenses-amount-input' aria-describedby='basic-addon1' placeholder='1000'> </div> </div> </div>");


});

});
//Buttons





});
