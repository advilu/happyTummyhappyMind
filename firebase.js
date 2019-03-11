$(document).ready(function(){

    // Initialize Firebase
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

    







});