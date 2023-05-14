$(document).ready(function () {

  let currentDateTime = dayjs().format("MMMM D, YYYY");
  let currentHour = parseInt(dayjs().format("H"));
  console.log(currentDateTime);

  $('#currentDay').text("Current date is: " + currentDateTime);
  $('.time-block').each(function(){
    let divHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(typeof divHour + " " + typeof currentHour);
    if (currentHour === divHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (currentHour < divHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    } else if (currentHour > divHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
  })

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  $("#hour-09 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));

});