$(document).ready(function() {
  // chaining takes one line and puts two or more different elements 
  // and methods together
  $("#chain-example-1").css("color", "orange").next().css("color", "blue");
});