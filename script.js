const form = document.querySelector('.contact-form');
const formStatus = form.querySelector('.form-status');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  formStatus.innerHTML = 'Sending...';

  fetch('https://example.com/send-email', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      formStatus.innerHTML = 'Message sent!';
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    formStatus.innerHTML = `An error occurred: ${error.message}`;
  });
});
const projects = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/300x200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ex quis elit semper imperdiet. Proin id augue non elit luctus volutpat vel ac magna. Duis vel pharetra nisl.",
    link: "#"
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300x200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ex quis elit semper imperdiet. Proin id augue non elit luctus volutpat vel ac magna. Duis vel pharetra nisl.",
    link: "#"
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/300x200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ex quis elit semper imperdiet. Proin id augue non elit luctus volutpat vel ac magna. Duis vel pharetra nisl.",
    link: "#"
  },
  {
    title: "Project 4",
    image: "https://via.placeholder.com/300x200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ex quis elit semper imperdiet. Proin id augue non elit luctus volutpat vel ac magna. Duis vel pharetra nisl.",
    link: "#"
  },
  {
    title: "Project 5",
    image: "https://via.placeholder.com/300x200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ex quis elit semper imperdiet. Proin id augue non elit luctus volutpat vel ac magna. Duis vel pharetra nisl.",
    link: "#"
  },
  {
    title: "Project 6",
    image: "https://via.placeholder.com/300x200",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ex quis elit semper imperdiet. Proin id augue non elit luctus volutpat vel ac magna. Duis vel pharetra nisl.",
    link: "#"
  }
];

const projectContainer = document.getElementById(".projects");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const image = document.createElement("div");
  image.classList.add("project-image");
  image.style.backgroundImage = `url('${project.image}')`;

  const details = document.createElement("div");
  details.classList.add("project-details");

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View Project";
  link.classList.add("project-button");

  details.appendChild(title);
  details.appendChild(description);
  details.appendChild(link);

  card.appendChild(image);
  card.appendChild(details);

  projectContainer.appendChild(card);
});
