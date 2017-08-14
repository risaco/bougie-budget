$(document).ready(function() {
  //firebase zipccode holder
  var config = {
    apiKey: "AIzaSyCWbKc4eBV_GvV-crVS5xyH4CVuwSkCuR8",
    authDomain: "bougiebudget-84d01.firebaseapp.com",
    databaseURL: "https://bougiebudget-84d01.firebaseio.com",
    projectId: "bougiebudget-84d01",
    storageBucket: "bougiebudget-84d01.appspot.com",
    messagingSenderId: "180701659253"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

  //Submit zip
  $('#zip-submit').on('click', function(event) {
    event.preventDefault();
    //grab zip
    var zipcode = $('#zip-input').val().trim();


    //call API to find state of zip-input
    var cKey = "js-tEvHMQxhKGkoJDfTyw24kpbAamNPl3HPIcxu34MNK7buKrnjXqnhPzS0VFPhJw7r";
    var key = "LMVzZkjQUtY8fT1Ik33NM2tUjGxG0RSMEOlE9Fu49scome6Hhau3dYYwFwdGn5s2";
    var queryURL = "https://www.zipcodeapi.com/rest/" + key + "/info.json/" + zipcode + "/degrees";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        var results = response.data;

        console.log(results);
        //Firebase object
        var locData = {
          zip: zipcode,

        }

        //Push to firebase
        database.ref().push(locData);
        //Empty field
        $('#zip-input').val("");

      })






    // location.href = "budget.html";
  });


});
