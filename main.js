// // scroll
// document.addEventListener('scroll', fix)
// const header = document.querySelector('.header')
// function fix(event) {
//   header.classList.add('header-fix')
//   // event.stopPropagation()
// }

// const home = document.querySelector('.home')
// home.addEventListener('click', unFix)
// function unFix(event) {
//   header.classList.remove('header-fix')
//   event.stopPropagation()
// }

const navLink = document.querySelectorAll('.navbar__link')
const nav = document.querySelector('.navbar__menu')
nav.addEventListener('click', activate)

function activate(event) {
  navLink.forEach((elem) => {
    elem.classList.remove('active')
  })
  const target = event.target
  target.classList.add('active')
}

// DOM variables

const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')
const arrow = document.querySelector('.contacts__arrow')

const addreses = document.querySelectorAll('.contacts__addreses')

// contacts

const contactBlock = document.querySelector('.contacts__block')
const contactImg = document.querySelector('.contacts__img')
const contactInner = document.querySelector('.contacts__inner')
const dropDown = document.querySelector('.contacts__dropdown')

contactInner.addEventListener('mouseenter', openContact)
contactInner.addEventListener('mouseleave', closeContact)

function openContact(event) {
  dropDown.classList.toggle('onHover')
  contactBlock.classList.toggle('active_dropdown')
  arrow1.classList.toggle('disappeare')
  arrow2.classList.toggle('appeare')
  arrow.style.backgroundColor = '#499a18'
  event.stopPropagation()

  if (
    window.matchMedia('(min-width: 320px)').matches &&
    window.matchMedia('(max-width: 768px)').matches
  ) {
    contactImg.classList.add('disappeare')
    contactImg.classList.add('dismargin')
  } else if (
    window.matchMedia('(min-width: 768px)').matches &&
    window.matchMedia('(max-width: 1440px)').matches
  ) {
    contactImg.classList.add('dismargin')
  }
}
function closeContact(event) {
  dropDown.classList.toggle('onHover')

  contactBlock.classList.toggle('active_dropdown')
  arrow1.classList.remove('disappeare')
  arrow2.classList.remove('appeare')
  // contactImg.classList.toggle('dismargin')
  // contactImg.classList.toggle('disappeare')
  arrow.style.backgroundColor = '#AEA1A1'
  if (
    window.matchMedia('(min-width: 320px)').matches &&
    window.matchMedia('(max-width: 768px)').matches
  ) {
    contactImg.classList.remove('disappeare')
    contactImg.classList.remove('dismargin')
  } else if (
    window.matchMedia('(min-width: 768px)').matches &&
    window.matchMedia('(max-width: 1440px)').matches
  ) {
    contactImg.classList.REMOVEe('dismargin')
  }
  event.stopPropagation()
}

// City choise
const links = document.querySelectorAll('.contacts__dropdown-item')

let city

const openCity = (event) => {
  city = '.' + event.target.id
  document.querySelector(`${city}`).classList.add('open')

  // closeContact()
  contactImg.classList.remove('dismargin')
  dropDown.classList.toggle('onHover')
  arrow.style.backgroundColor = '#AEA1A1'
  arrow1.classList.remove('disappeare')
  arrow2.classList.remove('appeare')
  contactBlock.classList.remove('active')
  event.stopPropagation()
  // dropDown.classList.toggle('onHover')
}
links.forEach((link) => {
  link.addEventListener('click', openCity)
  event.stopPropagation()
})

const btns = document.querySelectorAll('.service__btn')

const cards = document.querySelectorAll('.service__card')

for (let btn of btns) {
  btn.addEventListener('click', function () {
    filterCards(this.dataset.filter)
  })
}
function filterCards(sel) {
  for (let card of cards) {
    if (!card.classList.contains(sel)) {
      card.style.display = 'none'
    } else card.style.display = 'flex'
  }
  for (let btn of btns) {
    if (btn.dataset.filter === sel) {
      btn.classList.add('btn_active')
    } else btn.classList.remove('btn_active')
  }
}
