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
  const $dropdown_btn = $(".dropdown_flex_container div");
  const $about_btn = $("#about_btn");
  const $skills_btn = $("#skills_btn");
  const $projects_btn = $("#projects_btn");
  const $contact_btn = $("#contact_btn");

  // $official_contents.hide();
  $entrance_page.hide();

  $welcome_button.on("click", () => {
    // Slide up animation: entrance page gone, official contents appear
    $entrance_page.fadeOut("300", "linear", () => {
      $official_contents.show();
      // console.log("clicked?");
    });
  });

  // hamburger open animation
  $hamburger.on("click", () => {
    $hamburgerbar1.toggleClass("changebar1");
    $hamburgerbar2.toggleClass("changebar2");
    $hamburgerbar3.toggleClass("changebar3");
    $dropdown.toggleClass("dropdown_show");
  });

  // hamburger close animation
  $dropdown_btn.on("click", () => {
    $dropdown.removeClass("dropdown_show");
    $hamburgerbar1.removeClass("changebar1");
    $hamburgerbar2.removeClass("changebar2");
    $hamburgerbar3.removeClass("changebar3");
  });

  //hamburger item click auto scroll to a specific div
  $about_btn.on("click", () => {
    $(".main_section").animate(
      { scrollTop: $("#about").offset().top - 60 },
      500
    );
  });

  $skills_btn.on("click", () => {
    $(".main_section").animate(
      { scrollTop: $("#skills").offset().top - 60 },
      500
    );
  });

  $projects_btn.on("click", () => {
    $(".main_section").animate(
      { scrollTop: $("#projects").offset().top - 60 },
      500
    );
  });

  $contact_btn.on("click", () => {
    $(".main_section").animate(
      { scrollTop: $("#contact_me").offset().top - 60 },
      500
    );
  });

  //make a div clickable
  // https://css-tricks.com/snippets/jquery/make-entire-div-clickable/
  // $(".mobile_footer_navbar div").on("click", () => {
  //   window.location = $(this).find("a").attr("href");
  //   return false;
  // });
});
