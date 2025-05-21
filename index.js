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


window.onload= slideIn;