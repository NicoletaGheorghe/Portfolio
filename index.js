function slideIn() {
    const leftTextH1 = document.querySelector('.slidingText.left');
    const rightTextH1 = document.querySelector('.slidingText.right');
    
    const leftTextH2 = document.querySelector('.title .slidingText.left');
    const rightTextH2 = document.querySelector('.title .slidingText.right');
    const leftTextCV = document.querySelector('.slidingText.left');
    const rightTextCV = document.querySelector('.slidingText.right');

    const leftTextProjects = document.querySelector('.slidingText.left');
    const rightTextProjects = document.querySelector('.slidingText.right');

    setTimeout(() => {
    
        leftTextH1.classList.add('slide-in-left');
        rightTextH1.classList.add('slide-in-right');
        
        leftTextH2.classList.add('slide-in-left');
        rightTextH2.classList.add('slide-in-right');
        leftTextCV.classList.add('slide-in-left');
        rightTextCV.classList.add('slide-in-right')
        leftTextProjects.classList.add('slide-in-left');
        rightTextProjects.classList.add('slide-in-right');
    }, 100);
}

const fancyButton = document.getElementById('fancyButton');
const navbar = document.getElementById('navbar');

function toggleNavbar() {

    fancyButton.classList.toggle('clicked');

    navbar.classList.toggle('visible');
}

fancyButton.addEventListener('click', toggleNavbar);


const slideIndices = {};

// Initialize all slideshows
function initSlideshows() {
  const slideshows = document.querySelectorAll(".slideshow-cont");
  slideshows.forEach((slideshow) => {
    const id = slideshow.id;
    slideIndices[id] = 1;
    showSlides(id, 1);
  });
}

function plusSlides(id, n) {
  showSlides(id, slideIndices[id] += n);
}

function currentSlide(id, n) {
  showSlides(id, slideIndices[id] = n);
}

function showSlides(id, n) {
  const container = document.getElementById(id);
  const slides = container.getElementsByClassName("mySlides");
  const dots = container.getElementsByClassName("dot");

  if (n > slides.length) slideIndices[id] = 1;
  if (n < 1) slideIndices[id] = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndices[id] - 1].style.display = "block";
  dots[slideIndices[id] - 1].classList.add("active");
}

// Start when the page loads
window.onload = function(){
   initSlideshows();
    slideIn();
    const fancyButton = document.getElementById('fancyButton');
    setTimeout(() => {
        fancyButton.classList.add('rotate-once');
    }, 100);

    setTimeout(() => {
        fancyButton.classList.remove('rotate-once');
    }, 2100);
  }
  
