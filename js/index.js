// Your code goes here
const busImg = document.querySelector('.intro img')
busImg.addEventListener('mouseenter', () => {
    busImg.style.filter = 'invert(100%)'
})

busImg.addEventListener('mouseleave', () => {
    busImg.style.filter = 'invert(0)'
})

const body = document.querySelector('body')
document.addEventListener('keydown', () => {

    return(body.style.backgroundColor == 'white' 
    ? body.style.backgroundColor = 'orange' : body.style.backgroundColor = 'white') 
})

const button =  document.querySelectorAll('.btn')

function dragstart_handler(button) {
    button.dataTransfer.setData('text/plain',button.target.class)
}

window.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementsByClassName('btn')
    element.addEventListener('dragstart,dragstart_handler')
})

