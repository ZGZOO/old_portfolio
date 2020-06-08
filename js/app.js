// Test if jQuery and script works
// console.log("hello", $);
$(() => {
  $(".official-contents").hide();

  $("#welcomeButton").on("click", () => {
    // $(".entrance-page").hide();
    // Slide up animation: entrance page gone, official contents appear
    $(".entrance-page").slideUp(600, () => {
      $(".official-contents").show();
      console.log("clicked?");
    });
  });
});
