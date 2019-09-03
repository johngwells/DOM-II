const blocks = document.querySelector('.blocks')

const block = document.querySelectorAll('.block');
block.forEach(element => {
  element.addEventListener('click', e => {
    console.log('block is clicked')
    element.style.top = '-0px'
  })
})