// // //////////////
// // All this code has been moved to order.js
//
//  // $(document).ready(listeners);
// // listeners();
// //  window.onload = listeners();
//
// // window.onload = function(){
// //         getuserOrders;
// //         listeners;
// //
// //  }
// // window.onload = start;
// // $(document).ready(function(){
// //   });
//
//
// // function start() {
// //   getuserOrders();
// //   listeners();
// // }
// ////////////////////////////////////////////////////////////////////////////////////////
// // on meal show page - when the 'next' button is pressed, the next meal in the list is loaded
//  function nextMeal(){
//   $(".js-next").on("click", setNext())
// }
//
// function setNext(){
//   var nextId = parseInt($(".js-next").attr("data-id")) + 1;
//   $(".js-next").show();
//    if(nextId){
//
//   $.get("/meals/" + nextId + ".json", function(data){
//     console.log(data["name"])
//      $("#mealName").html(data["name"]);
//      $("#mealDescription").html(data["description"]);
//      $("#mealPrice").html("$" + parseInt(data["price"]).toFixed(2));
//      $("#mealCalories").html(data["calorie_count"]);
//      $(".js-next").attr("data-id", data["id"]);
//      $(".js-prev").attr("data-id", parseInt(data["id"]) - 1 );
//   })
// } else {
//   $(".js-next").hide();
// }
// }
//
// function setPrevious(){
//   var prevId = parseInt($(".js-prev").attr("data-id")) - 1;
//    $(".js-prev").show();
//     console.log($(".js-prev").attr("data-id"));
//    if (prevId){
//
//   $.get("/meals/" + prevId + ".json", function(data){
//     console.log(data["name"])
//      $("#mealName").html(data["name"]);
//      $("#mealDescription").html(data["description"]);
//      $("#mealPrice").html("$" + parseInt(data["price"]).toFixed(2));
//      $("#mealCalories").html(data["calorie_count"]);
//      $(".js-prev").attr("data-id", data["id"]);
//      $(".js-next").attr("data-id", parseInt(data["id"]) + 1);
//   })
// } else {
//   $(".js-prev").hide();
// }
// }
//
// // /////////////////////////////////////////////////////////////////////////
// // Code to display meal description & calorie count to menu when meal name is clicked
// function listeners(){
//   var meals = document.getElementsByClassName("descrip");
//
//   for (i=0; i<meals.length; i++){
//     meals[i].addEventListener("click", getDescription);
//   }
// }
//
// function getDescription(e){
//   url = $(this).attr("href")
//   console.log(url)
//   e.preventDefault();
//   $.get(`${url}.json`, function(response){
//     $(`td.mealDescription-${response["id"]}`).empty();
//     $(`td.mealDescription-${response["id"]}`).html(response["description"] + "<br>  Calorie Count: " + response["calorie_count"])
//     // alert(response["description"] + "  Calorie Count: " + response["calorie_count"])
//   })
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
// // when the word "meal" is clicked the list of meals is rendred on the page
// function getMeals(){
//    $.get("/meals.json", function(response){
//          // console.log("Response: ", response["0"])
//          mealsContainer = document.getElementById("meals-list");
//            for (var i=0; i<response.length; i++){
//             // $("#meals-list ").after("<td>" + response[i]["name"] + "</td><td>" + response[i]["price"] + "</td><br>")
//             var meals;
//             meals += "<tr><td>" + response[i]["name"] + "</td><td>" + "$" + response[i]["price"] + "</td></tr>"
//            }
//            $("#meals-list").append(meals)
//         });
//       }
