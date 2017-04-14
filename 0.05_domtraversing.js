$(document).ready(function () {
  // next
  $("#p-one").next().css({border: "2px solid blue"});
  // previous
  $("#list-two").prev().css({border: "2px solid red"});
});

console.log("-----------------------------------------------");

$(document).ready(function() {
  $("#p-two").parent().css({border: "2px solid yellow"});
  $("#div-two").children().css("font-style", "italic");
});

// find
  $('#find').find('#facebook').css("background-color", "#99BDB8");
  // another way to accomplish this would be to:
  // $("#find #facebook").css("background-color", "#99BDB8"); 

// closest
  $('#twitter-button').closest("li").css("background-color", "#59478A");