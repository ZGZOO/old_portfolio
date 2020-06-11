// Test if jQuery and script works
// console.log("hello", $);
$(() => {
  const $official_contents = $(".official_contents_wrapper");
  const $entrance_page = $(".entrance_page");
  const $welcome_button = $("#welcomeButton");
  const $hamburger = $(".hamburger");
  const $hamburgerbar1 = $(".bar1");
  const $hamburgerbar2 = $(".bar2");
  const $hamburgerbar3 = $(".bar3");
  const $dropdown = $(".dropdown");

  // $official_contents.hide();
  $entrance_page.hide();

  $welcome_button.on("click", () => {
    // Slide up animation: entrance page gone, official contents appear
    $entrance_page.fadeOut("300", "linear", () => {
      $official_contents.show();
      // console.log("clicked?");
    });
  });

  // hamburger animation
  $hamburger.on("click", () => {
    $hamburgerbar1.toggleClass("changebar1");
    $hamburgerbar2.toggleClass("changebar2");
    $hamburgerbar3.toggleClass("changebar3");
    $dropdown.toggleClass("dropdown_show");
  });

  //make a div clickable
  // https://css-tricks.com/snippets/jquery/make-entire-div-clickable/
  // $(".mobile_footer_navbar div").on("click", () => {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
});
