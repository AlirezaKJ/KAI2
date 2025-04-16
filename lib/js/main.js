AOS.init();

function headerscrlto() {
  let headerel = document.querySelector('header').getBoundingClientRect()
  console.log(headerel.bottom)
  window.scrollBy(0, headerel.bottom)
}

// ! NAV BURG MENU related stuff
let burgmenudiv = document.querySelector("header nav .burgermenu")
let fsmenudiv = document.querySelector("header #fsmenu")
let headerel = document.querySelector("header")
function toggleNav() {
  if (burgmenudiv.classList.contains("open")) {
    document.querySelector("body").classList.remove("stop-scrolling")
    fsmenudiv.classList.remove("fsmenuopen")
    burgmenudiv.querySelector("svg").innerHTML = `<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>`
    burgmenudiv.classList.remove("open")
    headerel.classList.remove("openedmenu")
  } else {
    document.querySelector("body").classList.add("stop-scrolling")
    fsmenudiv.classList.add("fsmenuopen")
    burgmenudiv.querySelector("svg").innerHTML = `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>`
    burgmenudiv.classList.add("open")
    headerel.classList.add("openedmenu")
  }
}


// ! HEADER ICON TOGGLING FUNCTIONS

let headerms = document.querySelectorAll("header .centerstuff .icon svg g path");
let headermbot = document.querySelector("header .centerstuff .icon svg #mbot");
let headermright = document.querySelector("header .centerstuff .icon svg #mright");
let headermleft = document.querySelector("header .centerstuff .icon svg #mleft");
let headermtop = document.querySelector("header .centerstuff .icon svg #mtop");

function headerclearms() {
  headermbot.classList.remove("mboton")
  headermright.classList.remove("mrighton")
  headermleft.classList.remove("mlefton")
  headermtop.classList.remove("mtopon")
  headerms.forEach((e) => {
    e.classList.remove("fadep")
    e.classList.remove("headerfullplg")
    e.classList.remove("header3mw")
  })
}
function headerfadems() {
  headerms.forEach((e) => {
    e.classList.add("fadep")
  })
}
function headeronbotm() {
  headerclearms()
  // fadems()
  headermbot.classList.add("mboton")
}
function headeronrightm() {
  headerclearms()
  // fadems()
  headermright.classList.add("mrighton")
}
function headeronleftm() {
  headerclearms()
  // fadems()
  headermleft.classList.add("mlefton")
}
function headerontopm() {
  headerclearms()
  // fadems()
  headermtop.classList.add("mtopon")
}
function headerfullplg() {
  headerms.forEach((e) => {
    e.classList.add("headerfullplg")
  })
}

function headerfullbg() {
  headerms.forEach((e) => {
    e.classList.add("header3mw")
  })
}


function header3mw() {
  headermbot.classList.add("header3mw")
  headermright.classList.add("header3mw")
  headermleft.classList.add("header3mw")
  headermtop.classList.add("fadep")
}

function loadf() {
  console.log("page loaded")
}