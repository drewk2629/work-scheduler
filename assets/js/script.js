var timeHeaderEL = document.getElementById("currentDay");
var saveBtn = document.querySelectorAll(".saveBtn");

// set header time
var time = moment().format("dddd, MMMM Do YYYY, hh:mm a");
timeHeaderEL.innerHTML = time;



// save description
$(".saveBtn").on("click", function () {
  var saveDescription = $(this).siblings(".description").val().trim();
  localStorage.setItem($(this).siblings(".hour").attr("id"), saveDescription);
});

// get descriptions
var loadDescriptions = function () {
    var innerNine = localStorage.getItem("9");
    $("#9").siblings(".description").val(innerNine);
    var innerTen = localStorage.getItem("10");
    $("#10").siblings(".description").val(innerTen);
    var innerEleven = localStorage.getItem("11");
    $("#11").siblings(".description").val(innerEleven);
    var innerTwelve = localStorage.getItem("12");
    $("#12").siblings(".description").val(innerTwelve);
    var innerThirt = localStorage.getItem("13");
    $("#13").siblings(".description").val(innerThirt);
    var innerFourt = localStorage.getItem("14");
    $("#14").siblings(".description").val(innerFourt);
    var innerFift = localStorage.getItem("15");
    $("#15").siblings(".description").val(innerFift);
    var innerSixT = localStorage.getItem("16");
    $("#16").siblings(".description").val(innerSixT);
    var innerSevenT = localStorage.getItem("17");
    $("#17").siblings(".description").val(innerSevenT);
  };

// get current hour
currentHour = moment().hours();

// set styles
$(".hour").each(function () {
  rowHour = $(this).attr("id");

  if (rowHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  }

  if (rowHour == currentHour) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  }

  if (rowHour > currentHour) {
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
  }
});



// load the descriptions
loadDescriptions();