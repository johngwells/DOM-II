// Your code goes here
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});

const link = document.querySelectorAll('.nav-link');
link.forEach(element => {
  element.addEventListener('mouseover', e => {
    element.style.color = '#FFDAB9';
  });
  element.addEventListener('mouseleave', e => {
    element.style.color = 'black';
  })
});

const aLinks = document.querySelectorAll('a');
aLinks.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
  })
})

const images = document.querySelectorAll('img');
images.forEach(element => {
  element.addEventListener('dblclick', e => {
    element.style.border = '5px solid #FFDAB9';
  })
  element.addEventListener('click', e => {
    element.style.border = '5px solid black';
  })
})

const pElements = document.querySelectorAll('p');
pElements.forEach(element => {
  element.addEventListener('click', e => {
    element.textContent = 'Hello World!';
  })
})

const dragElement = document.querySelectorAll('img');
dragElement.forEach(element => {
  element.addEventListener('drag', e => {
    element.style.opacity = '.5'
  })
})

const kDown = document.querySelector('body');
kDown.addEventListener('keydown', e => {
  kDown.style.backgroundColor = '#FFDAB9';
    // e.stopPropagation();
    const kUp = document.querySelector('body');
      kUp.addEventListener('keyup', e => {
      kUp.style.backgroundColor = 'white';
    })
})

window.addEventListener('resize', event => {
  const sp = document.querySelector('h2');
  sp.textContent = 'Bus Fun';
})

const context = document.querySelector('p');
context.addEventListener('contextmenu', e => {
  context.textContent = 'sign up';
})

const containerHome = document.querySelector('.intro p');
containerHome.addEventListener('click', e => {
  containerHome.style.backgroundColor = 'gray';
  e.stopPropagation();
  const contentSection = document.querySelector('.content-section');
    contentSection.addEventListener('click', e => {
    contentSection.style.backgroundColor = 'black';
  })
})
