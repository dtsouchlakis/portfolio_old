// Smooth scrolling effect for links
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});

const header = document.querySelector("header");
window.addEventListener("scroll", checkScroll);
var doc = document.documentElement;
var w = window;
const projectContainer = document.querySelector(".projects .container");
var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;
const main = doc.querySelector("main");
const overlay = doc.querySelector(".overlay");
//access every project in the div with the id "projects" and then convert it into a list of objects with the title, link, description and photo keys inside each key of a project

const projectsList = {
  project1: {
    title: "Card flip",
    link: "https://github.com/dtsouchlakis/dtsouchlakis.github.io/tree/main/card%20flip",
    description:
      "A simple card flip game where the user can generate their selected amount of cards and then has to find the correct card with the least amount of tries possible. This project was built with HTML, CSS and JavaScript. It helped me to learn the basics of Javascript including the DOM and the event listeners.",
    photo: "https://cdn-icons-png.flaticon.com/512/827/827265.png",
  },
  project2: {
    title: "Place the box game",
    link: "https://github.com/dtsouchlakis/dtsouchlakis.github.io/tree/main/mouse_game",
    description:
      "A game where a random amount of boxes are placed in random locations on the screen. The user has to select the winning box as indicated on the screen and place it on the target as fast as possible. This project was built with HTML, CSS and JavaScript. The project helped me understand event listeners and the DOM even further, as well as understand how event listener events propagate.",
    photo: "https://cdn-icons-png.flaticon.com/512/685/685391.png",
  },
  project3: {
    title: "Saint Pauls webpage",
    link: "https://github.com/dtsouchlakis/dtsouchlakis.github.io/tree/main/St.%20Pauls%20project",
    description:
      "A static page of an international school in Seoul, using only css and html. This project was a challenge that helped me understand how to individually manage a larger project, including planning and time management, as well as implement my vision with CSS and HTML, without using Javascript, meaning I had to be creative in order to achieve my targets without it.",
    photo: "https://cdn-icons-png.flaticon.com/512/1080/1080985.png",
  },
  project4: {
    title: "Tesla clone",
    link: "https://github.com/dtsouchlakis/dtsouchlakis.github.io/tree/main/Tesla",
    description:
      "A clone of the tesla website using only CSS and HTML. This project helped me understand even better the limitations of CSS but also allowed me to understand that CSS by itself is very versatile and can do a lot of things on its own.",
    photo: "https://cdn-icons-png.flaticon.com/512/1724/1724680.png",
  },
  project5: {
    title: "Weather App",
    link: "https://github.com/dtsouchlakis/dtsouchlakis.github.io/tree/main/weatherApp",
    description:
      "This project makes use of responsive design, AJAX calls in javascript, an autocomplete feature.",
    photo: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
  },
  project6: {
    title: "Tic Tac Toe",
    link: "https://github.com/dtsouchlakis/dtsouchlakis.github.io/tree/main/ticktacktoe",
    description:
      "One of the first projects that I developed with Javascript. This project helped me implement a more complex logic and make a more modular use of functions in Javascript.",
    photo: "https://cdn-icons-png.flaticon.com/512/2162/2162800.png",
  },
  project7: {
    title: "Nespresso Clone",
    link: "https://github.com/dtsouchlakis/dtsouchlakis.github.io/tree/main/nespresso",
    description:
      "This project is a clone of the nespresso website. It was coded using HTML and CSS and features a responsive design",
    photo: "https://cdn-icons-png.flaticon.com/512/1268/1268709.png",
  },
  project8: {
    title: "Final Project - Waygookwin",
    link: "https://github.com/dtsouchlakis/batch19-project",
    description:
      "The final team project at the bootcamp, with a duration of 3 weeks. The project idea is a website which flips the idea of job searching on its head and allows companies to search for users instead. This project was built with HTML, CSS, JavaScript and PHP and is structured in an MVC architecture. The challenges of the project include team management, database management, and database design, as well as bugfixing in a limited time. The features I worked on include: Database management and design, Team management - worked as scrum master on the 3rd week, A messenging and chat feature, A talent search feature, including ranking the canditates depending on specific filters, and A notification feature for booked meetings.",
    photo: "https://cdn-icons-png.flaticon.com/512/3688/3688609.png",
  },
  project9: {
    title: "WIP - Pacman clone",
    link: "#",
    description:
      "WIP. A clone of the game pacman. This is made using canvas and following an online tutorial for the main structure and the concepts, but then deviating and developing my own features as it develops. This project helped me learn a lot about classes and bojects and how to use them effectively.",
    photo: "https://freepngimg.com/save/21577-pac-man-transparent/512x512",
  },
  project10: {
    title: "WIP - BYOX",
    link: "#",
    description:
      "A finance app that allows users to split costs with other users and family members. This project is done in collaboration with other friend developers, using Django, PHP, Javascript, HTML and CSS",
    photo: "https://cdn-icons-png.flaticon.com/512/781/781831.png",
  },
};

function checkScroll() {
  /*
   ** Find the direction of scroll
   ** 0 - initial, 1 - up, 2 - down
   */

  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    //scrolled up
    direction = 2;
  } else if (curScroll < prevScroll) {
    //scrolled down
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
}

var toggleHeader = function (direction, curScroll) {
  if (direction === 2 && curScroll > 52) {
    //replace 52 with the height of your header in px

    header.classList.add("hide");
    prevDirection = direction;
  } else if (direction === 1) {
    header.classList.remove("hide");
    prevDirection = direction;
  }
};

function projectWin() {
  for (let project in projectsList) {
    let newProject = document.createElement("div");
    newProject.classList.add("project");
    let newProjectImg = document.createElement("img");
    newProjectImg.setAttribute("src", projectsList[project].photo);
    newProject.appendChild(newProjectImg);
    let newProjectDiv = document.createElement("div");
    newProject.appendChild(newProjectDiv);
    projectContainer.append(newProject);
    newProject.addEventListener("click", function (e) {
      overlay.style.display = "block";

      let newDiv = document.createElement("div");
      let newH1 = document.createElement("h1");
      let newP = document.createElement("p");
      let newImg = document.createElement("img");
      let callToAction = document.createElement("a");
      let projectId = newProject.id;
      let exitMenu = document.createElement("img");
      exitMenu.setAttribute("src", "./assets/x-symbol-svgrepo-com.svg");
      exitMenu.classList.add("exitIcon");
      newH1.textContent = projectsList[project].title;
      newP.textContent = projectsList[project].description;
      callToAction.textContent = ` click here to see the project on github`;
      callToAction.setAttribute("href", projectsList[project].link);
      newImg.setAttribute("src", projectsList[project].photo);
      newDiv.appendChild(newH1);
      newDiv.appendChild(newImg);
      newDiv.appendChild(newP);
      newDiv.appendChild(callToAction);
      newDiv.appendChild(exitMenu);
      newDiv.classList.add("window");
      document.body.appendChild(newDiv);
      main.style.cursor = "pointer";
      document.body.style.overflow = "hidden";
      exitMenu.addEventListener("click", () => {
        document.body.removeChild(newDiv);
        main.style.cursor = "auto";
        document.body.style.overflow = "auto";
        overlay.style.display = "none";
      });
      e.stopPropagation();
      overlay.addEventListener("click", (e) => {
        console.log(e.currentTarget);
        document.body.removeChild(newDiv);
        main.style.cursor = "auto";
        document.body.style.overflow = "auto";

        overlay.style.display = "none";

        e.stopPropagation();
      });
      console.log(e.target);
    });
  }
}

checkScroll();
projectWin();
