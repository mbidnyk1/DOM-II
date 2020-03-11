// Your code goes here

const homeH2 = document.querySelectorAll('h2')
document.addEventListener('scroll', () => {
    homeH2.forEach(element => {
        element.style.fontSize = '80px'
    })
})
const input = document.querySelector('input')
document.addEventListener('select', () => {
        input.style.color = "purple"
        input.style.transform = 'scale(5)'

})

const boatImg = document.querySelector('.inverse-content .img-content img')
document.addEventListener('dblclick', () => {
    boatImg.style.transform = 'rotateX(180deg)'
})

const boatImg2 = document.querySelector('.content-destination')
input.addEventListener('focus', () => {
    boatImg2.remove()
})
const footer = document.querySelector('footer')
window.addEventListener('resize', () => {
    footer.style.backgroundColor = 'blue'})

const busImg = document.querySelector('.intro img')
busImg.addEventListener('mouseenter', () => {
    busImg.style.filter = 'invert(100%)'
})

busImg.addEventListener('mouseleave', () => {
    busImg.style.filter = 'invert(0)'
})

const body = document.querySelector('body')
document.addEventListener('keydown', () => {

    body.style.backgroundColor == 'white' 
    ? body.style.backgroundColor = 'orange' : body.style.backgroundColor = 'white' 
})

const button =  document.querySelector('#dragBtn')

function onDragStart(event) {
    event.dataTransfer.setData('text/plain',event.target.id)
    event.currentTarget.style.backgroundColor = 'yellow'
}


const homeP = document.querySelectorAll('p')
document.addEventListener('wheel', () => {
    homeP.forEach(element => {
        element.style.fontSize = '10px'
    })
})

const header = document.querySelector('header')
document.addEventListener('dblclick', () => {

    header.style.backgroundColor = 'green'
    
})

document.addEventListener('dblclick', () => {
    stopPropogation()
    body.style.backgroundColor = 'green'
})

const navLinks = document.querySelectorAll('.nav-link')
 navLinks.forEach(element => {
     element.addEventListener('click', (event) => { 
    event.preventDefault()
     })
})

const mapImg = document.querySelector('.img-content img')
document.addEventListener('load',
    mapImg.src ='img/croc.jpg'
)










