// Test if jQuery and script works
// console.log("hello", $);
$(() => {
  // $(".official_contents").hide();
  $(".entrance_page").hide();

  $("#welcomeButton").on("click", () => {
    // Slide up animation: entrance page gone, official contents appear
    $(".entrance_page").fadeOut("300", "linear", () => {
      $(".official_contents").show();
      console.log("clicked?");
    });
  });

  //make a div clickable
  // https://css-tricks.com/snippets/jquery/make-entire-div-clickable/
  // $(".mobile_footer_navbar div").on("click", () => {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
});
