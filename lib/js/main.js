AOS.init();

function headerscrlto() {
  let headerel = document.querySelector('header').getBoundingClientRect()
  console.log(headerel.bottom)
  window.scrollBy(0, headerel.bottom)
}