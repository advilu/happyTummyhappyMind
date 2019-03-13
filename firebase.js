$(document).ready(function(){

    // Initialize Firebase for Newsletter Sign-up
    var config = {
      apiKey: "AIzaSyB5XCbn8_Cy0CnTXzHzd0qe_Q7g3ylIg0k",
      authDomain: "happytummy-f3257.firebaseapp.com",
      databaseURL: "https://happytummy-f3257.firebaseio.com",
      projectId: "happytummy-f3257",
      storageBucket: "happytummy-f3257.appspot.com",
      messagingSenderId: "832652500325"
    };

    firebase.initializeApp(config);
  
    var database = firebase.database();
  
    var email = "";
  
    $("#submit").on("click", function(event){
      event.preventDefault();
      email = $("#email-input").val().trim();
      database.ref("/emails").push({
         email: email
      });
      clearForm();
    });
  
    var clearForm = function(){
     $("#email-input").val("");
    }


    // 

    // Nutrition API edamam.com
    var queryURL = "https://api.edamam.com/api/nutrition-data?app_id=b7bd3349&app_key=6b0366fe435019d42d6fa852ce355631&ingr=1%20large%20apple";

    // AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var results = response.data;
    });




});