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
  $('#zip-submit').on('click', function() {
    event.preventDefault();
    //grab zip
    var zipcode = $('#zip-input').val().trim();
    console.log(zipcode);
    var pushedZip = {
      zip: zipcode
    }
    //Push to firebase
    database.ref().push(pushedZip);
    //Empty field
    $('#zip-input').val("");

    location.href = "budget.html";
  });

});
