# Project Overview

## Project Schedule

This schedule will be used to keep track of my progress throughout the week and align with the expectations.

I am **responsible** for scheduling time with my squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Description                          | Complete |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete |
| Day 2 | Core Application Structure (HTML, CSS, etc.) | Complete |
| Day 3 | MVP & Bug Fixes                              | Complete |
| Day 4 | Final Touches                                | Complete |
| Day 5 | Present                                      | Complete |

## Project Description

This project is my portfolio as a SPA (single page app), containing my about, my skills, my projects and a section to contact me!

Entrance animation inspired by [Haley's portfolio](https://hbubley.github.io/unitOneProject/projectFrame/)

Some layout inspired by [Matt's portfolio](https://mattfarley.ca/)

## Google Sheet

[A list of my projects](https://docs.google.com/spreadsheets/d/1gTe7FxngTNHHzZ62snW1R6GwnuFIoltFxoB_O8UbkIc/edit?usp=sharing)

## Wireframes

Below is the link of the folder, where I put all the pictures of wireframes of mobile, tablet, and laptop. Each picture has a specific name describing what design it is.

- [Mobile Design 1 (Hamburger icon)](https://res.cloudinary.com/headincloud/image/upload/v1591646432/SEI_portfolio_wireframes/Mobile%20design%201.jpg)
- [Mobile Design 2 (Entrance page, nav items)](https://res.cloudinary.com/headincloud/image/upload/v1591646432/SEI_portfolio_wireframes/Mobile%20design%202.jpg)
- [Mobile Design 3 (Projects section & Contact Me section)](https://res.cloudinary.com/headincloud/image/upload/v1591646432/SEI_portfolio_wireframes/Mobile%20design%203.jpg)
- [Tablet and Laptop Design (Responsive Layout)](https://res.cloudinary.com/headincloud/image/upload/v1591646433/SEI_portfolio_wireframes/Tablet%20and%20Laptop%20Design.jpg)
- [Laptop Design 2 (Projects section layout)](https://res.cloudinary.com/headincloud/image/upload/v1591646431/SEI_portfolio_wireframes/Laptop%20Design%202.jpg)

## Time/Priority Matrix

[A picture of my time/priority matrix](https://res.cloudinary.com/headincloud/image/upload/v1591651665/SEI_portfolio_time_priority_matrix/time_priority_matrix.jpg)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix. This involves drawing a a square. In the middle of the square, on the x axis draw a line. The most left part of the line should start with 0hrs and the end of the line should include 2hrs. This line will be used to estimate how much time any one feature will take to complete.

Now draw a vertical line on the y axis. The top of this line should have `High` and the bottom `Low`. This line will be used to assign a priority to to each feature you wish to include in the project.

Now create a separate list starting with A and assign it one of the features. Continue to assign each feature a letter. Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter.

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. MVP is carefully decided because the client will expect this functionality to be implemented upon project completion.

#### MVP

- (Mobile, Tablet) Click hamburger icon, hidden options show up from the bottom, stacking on each other
- (Laptop) Regular nav bar (about, skills, projects, contact me)
- (Mobile, Tablet) Entrance page, swipe up (or click) to see more
- (Laptop) Entrance page, scroll up (or click) to see more
- (All) Click on each option, automatically go to that section smoothly
- Pull data(my projects list) using google json api
- Render data on page
- (Mobile, Tablet) Projects section, click each card, then skill used, live page button, github source button will appear
- (Laptop) Projects section, hover on each card, then skill used, live page button, github source button will appear
- Contact me section, little animation when the users are about to type in their information
- A convenient button for users to go to the top of the page smoothly

#### PostMVP

- Use Bootstrap
- Button Animation with cool effects
- Make my own icon to add personality to the webpage

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions. Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Hamburger               |    H     |     1.5hr      |      -hr      |     3hr     |
| Slide Menu              |    H     |     2hr        |      -hr      |     3hr     |
| Mobile Nav              |    H     |     1.5hr      |      -hr      |     4hr     |
| Regular Nav             |    H     |     1.5hr      |      -hr      |     2hr     |
| Entrance animation      |    H     |      2hr       |      -hr      |    1.5hr    |
| Smooth scrolls          |    H     |      2hr       |      -hr      |    1.5hr    |
| Project Previews        |    H     |      3hr       |      -hr      |     4hr     |
| Contact Me Form         |    H     |     1.5hr      |      -hr      |     1hr     |
| Working with API        |    H     |      3hr       |      -hr      |     3hr     |
| Responsive              |    H     |      3hr       |      -hr      |     5hr     |
| Other sections and flex |    M     |      2hr       |      -hr      |     2.5hr   |
| Social Media Icons      |    L     |     0.5hr      |      -hr      |     0.5hr   |
| Total                   |    H     |     20hrs      |     -hrs      |    31hrs    |

#### PostMVP

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Bootstrap        |    H     |      4hr       |      -hr       |     1hr     |
| Button Animation |    L     |      1hr       |      -hr       |     3hr     |
| Make own icon    |    L     |      2hr       |      -hr       |     0hr     |
| Total            |    H     |      7hrs      |      -hrs      |    4hrs     |

## Additional Libraries

Here is the list of all supporting libraries and their roles in the project.

1.  [jQuery](https://code.jquery.com/) (write less JavaScript code, yet do powerful jobs on DOM)
2.  [Bootstrap](https://getbootstrap.com/) (CSS library for quick and beautiful webpage design)
3.  [Font Awesome](https://fontawesome.com/) (Beautiful little icons)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description
//Talking point
//Challenge

```
.drop_up {
  position: relative;
  display: inline-block;
}

.dropup_content {
  background-color: #eaeaea;
  position: absolute;
  right: 1px;
  bottom: calc(-36vw);
  min-width: 19vw;
  z-index: -1;
  opacity: 0;
  transition: all 0.6s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px 0;
  /* display: none; */
}

/* Show the dropup menu on hover */
.dropup_content_show {
  opacity: 1;
  bottom: calc(15.2vw);
  z-index: 1;
}

/* Links inside the dropup */
.dropup_content a {
  color: black;
  text-decoration: none;
  display: block;
  flex: 1 1;
}

#github {
  margin: 20px 0;
}
```

## Issues and Resolutions

This section is to list of all major issues encountered and their resolution.

**ERROR**: jQuery on click no response
**RESOLUTION**: put code in jQuery Window Onload \$(()=>{})

**ERROR**:
**RESOLUTION**:
