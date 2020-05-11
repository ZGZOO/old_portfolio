// document.querySelector("h2").addEventListener("click", function () {
//   e.target.style.color = "red";
// });

//jQuery codes
$("section").on("click", function () {
  $(this).toggleClass("show-description");
});

//scroll function
$(document).ready(function () {
  $("#gotop").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
