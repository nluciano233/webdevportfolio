const projectOverview = document.getElementById('project-overview');
const container = document.querySelector('.project-overview-img-container');



const removeDisplayNone = (element) => {
  element.classList.remove('displayNone');
}
const addDisplayNone = (element) => {
  element.classList.add('displayNone');
}

// close the project viewer if the user clicks on the image or anywhere else
// remove all children images from the img-container
projectOverview.addEventListener('click', event => {
  // close viewer
  addDisplayNone(projectOverview);

  //remove children
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
})

// handles which image to append to projectOverview based on each project class
const imageHandler = (project) => {
  // get the child nodes by using the parent node name instead of document
  let el = project.getElementsByTagName('img');
  let img = document.createElement('img');

  switch (el[0].className) {
    case "lithodora":
      img.src = "https://res.cloudinary.com/djg52dvw1/image/upload/v1658052765/portfolio/lithodora_capri_homepage.jpg"
      img.alt = "lithodora capri website"
      container.appendChild(img)
      break;
    case "casarossa":
      img.src = "https://res.cloudinary.com/djg52dvw1/image/upload/v1658052858/portfolio/museo_casa_rossa.jpg"
      img.alt = "museo casa rossa website"
      container.appendChild(img)
      break;
    case "capriadventures":
      img.src = "https://res.cloudinary.com/djg52dvw1/image/upload/v1658053057/portfolio/capri_adventures.jpg"
      img.alt = "capri adventures website"
      container.appendChild(img)
      break;
    default:
      console.log('error');
  }
}

// when you click outside projectoverview remove the img element that is added inside of it when it is triggered

// add event listeners on all items for vieweing projects
document.querySelectorAll('.project').forEach(item => {
  item.addEventListener('click', event => {
    // activate project dispaly overlay
    removeDisplayNone(projectOverview);
    // handle images
    imageHandler(item);
  })
})

