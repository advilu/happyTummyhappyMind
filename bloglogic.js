var ingredient = ["beet greens", "kale", "sweet potato", "celery", "cauliflower", "eggplant", "cherries", "pineapple", "zucchini", "carrots", "strawberries", "apples", "watermelon"]

$(".span").on("click", function() {
    
   var ingredient = $(this).attr("span-id")
   var queryURL = ;

       $.ajax({
         url: queryURL,
         method: "GET"
      }).then(function(response) {
            console.log(response);
         
             var results = response.data;
             console.log(response.data);