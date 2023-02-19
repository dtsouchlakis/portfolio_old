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
const projects = doc.querySelectorAll(".project");

var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;
const main = doc.querySelector("main");
const projectsList = {
  project1: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
  },
  project2: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
  },
  project3: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
  },
  project4: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
  },
  project5: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
  },
  project6: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
  },
  project7: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
  },
  project8: {
    title: "my project",
    link: "www.github.com",
    description:
      " nam  voluptatem aliquam! Iste obcaecati quidem fugit deleniti quia in nisi fuga error hic. Blanditiis beatae magni consequatur. Sint distinctio, corporis animi eveniet asperiores tempora. Deleniti impedit, eveniet sit optio modi, tenetur sint, maxime deserunt porro quod dolor animi quibusdam cum quaerat unde id. Numquam labore ut dolor assumenda possimus impedit, eligendi ipsa accusamus incidunt quaerat in officiis at neque animi ullam nihil atque reiciendis? Sint, eius soluta? Suscipit nam iure quas accusantium, soluta natus culpa incidunt explicabo non maxime quos. Ipsam, et eveniet.",
    photo: "./assets/project.jpg",
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
  for (let project of projects) {
    project.addEventListener("click", function (e) {
      let newDiv = document.createElement("div");
      let newH1 = document.createElement("h1");
      let newP = document.createElement("p");
      let newImg = document.createElement("img");
      let callToAction = document.createElement("a");
      let projectId = project.id;
      let exitMenu = document.createElement("img");
      exitMenu.setAttribute("src", "./assets/x-symbol-svgrepo-com.svg");
      exitMenu.classList.add("exitIcon");
      console.log(project.id);
      console.log(projectsList[projectId]);
      newH1.textContent = projectsList[projectId].title;
      newP.textContent = projectsList[projectId].description;
      callToAction.textContent = ` click here to see the project on github`;
      callToAction.setAttribute("href", projectsList[projectId].link);
      newImg.setAttribute("src", projectsList[projectId].photo);
      newDiv.appendChild(newH1);
      newDiv.appendChild(newImg);
      newDiv.appendChild(newP);
      newDiv.appendChild(callToAction);
      newDiv.appendChild(exitMenu);
      newDiv.classList.add("window");
      document.body.appendChild(newDiv);
      main.style.cursor = "pointer";

      exitMenu.addEventListener("click", () => {
        document.body.removeChild(newDiv);
      });
      e.stopPropagation();
      main.addEventListener("click", (e) => {
        console.log(e.currentTarget);
        document.body.removeChild(newDiv);
        main.style.cursor = "none";
        e.stopPropagation();
      });
      console.log(e.target);
    });
  }
}

checkScroll();
projectWin();
