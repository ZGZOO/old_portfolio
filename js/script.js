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
  const $about_btn = $(".about_btn");
  const $skills_btn = $(".skills_btn");
  const $projects_btn = $(".projects_btn");
  const $contact_btn = $(".contact_btn");

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
  //https://stackoverflow.com/questions/19012495/smooth-scroll-to-div-id-jquery
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

  //pull data from google sheet via API call
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/1gTe7FxngTNHHzZ62snW1R6GwnuFIoltFxoB_O8UbkIc/edit?usp=sharing";

  const sheetAsJSON =
    "https://spreadsheets.google.com/feeds/list/1gTe7FxngTNHHzZ62snW1R6GwnuFIoltFxoB_O8UbkIc/od6/public/values?alt=json";

  $.ajax({
    url: sheetAsJSON,
  })
    .then((data) => {
      // console.log("data", data);
      const projects = data.feed.entry.map((project) => {
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t,
        };
      }); //map ends
      app(projects);
      //console.log("projects", projects);
    })
    // .catch is meant to handle/catch errors
    .catch((err) => console.log("err", err));

  function app(projectsArr) {
    console.log("inside app - projectsArr", projectsArr);
    projectsArr.forEach((project) => {
      //create an h3
      let title = $("<h3>");
      //assign the title the value stored in project.title
      title.text(project.title);
      //append the title to the body
      $("body").append(title);
    });
  }
});
