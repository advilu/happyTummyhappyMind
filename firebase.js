$(document).ready(function(){

    // Initialize Firebase


  firebase.initializeApp(config);

  var database = firebase.database();

  var emailsRef = database.ref("/emails");
  var email = "";


  $("#submit").on("click", function(event){

    event.preventDefault();


    email = $("#email-input").val().trim();


    database.ref("/emails").push({
       email: email
    });




  });

  var clearForm = function(){




  }

    







});