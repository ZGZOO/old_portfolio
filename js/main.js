// document.querySelector("h2").addEventListener("click", function () {
//   e.target.style.color = "red";
// });

$("section").on("click", function () {
  $(this).toggleClass("show-description");
});
