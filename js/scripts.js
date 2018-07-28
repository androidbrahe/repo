$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})

  // alert($("#css-item").text());
  // alert($("#goal-list").text())
  // ;
// })


alert(2 + 2);
alert(4 + "2");
alert("string one" * "string two");
