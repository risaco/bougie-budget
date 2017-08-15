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
        var cKey = "js-Uomzs9Cq0QzJJLYUZKpYEDXaYeyNIMRCbebDnO4nED7np6hoQHnukkFizd5h0XUb";
        var key = "8JTlUst2XixZgsRbT7hgeWYZZjP6RGH0qAlk3Pn18U0pmRAgZSwdOudON2UFJBGa";
        var queryURL = "https://www.zipcodeapi.com/rest/" + cKey + "/info.json/" + zipcode + "/degrees";
        console.log(queryURL);

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function(response) {
                var results = response.data;
                var state = results.state;
                var city = results.city;

                console.log(results);
                //Firebase object

                var locData = {
                    zip: zipcode,
                    city: city,
                    state: state
                }

                //Push to firebase
                database.ref().push(locData);
                //Empty field
                $('#zip-input').val("");

                location.href = "budget.html";
            })







    });


});