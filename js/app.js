// Test if jQuery and script works
// console.log("hello", $);
$(() => {
  $(".official-contents").hide();

  $("#welcomeButton").on("click", () => {
    // Slide up animation: entrance page gone, official contents appear
    $(".entrance-page").fadeOut("300", "linear", () => {
      $(".official-contents").show();
      console.log("clicked?");
    });
  });

  $(".hamburger").on("click", () => {
    console.log("hamburger");
  });
});
