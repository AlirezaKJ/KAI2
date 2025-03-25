AOS.init();

function headerscrlto() {
  let headerel = document.querySelector('header').getBoundingClientRect()
  console.log(headerel.bottom)
  window.scrollBy(0, headerel.bottom)
}

// ! NAV BURG MENU related stuff
let burgmenudiv = document.querySelector("header nav .burgermenu")
let fsmenudiv = document.querySelector("header #fsmenu")
function toggleNav() {
  if (burgmenudiv.classList.contains("open")) {
    fsmenudiv.classList.remove("fsmenuopen")
    burgmenudiv.querySelector("svg").innerHTML = `<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>`
    burgmenudiv.classList.remove("open")
  } else {
    fsmenudiv.classList.add("fsmenuopen")
    burgmenudiv.querySelector("svg").innerHTML = `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>`
    burgmenudiv.classList.add("open")
  }
}