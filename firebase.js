$(document).ready(function(){

    // Initialize Firebase
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