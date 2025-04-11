let aboutusms = document.querySelectorAll(".fullicon #icon svg g path");
let aboutusmbot = document.querySelector(".fullicon #icon svg #mbot");
let aboutusmright = document.querySelector(".fullicon #icon svg #mright");
let aboutusmleft = document.querySelector(".fullicon #icon svg #mleft");
let aboutusmtop = document.querySelector(".fullicon #icon svg #mtop");

function clearms() {
  aboutusmbot.classList.remove("mboton")
  aboutusmright.classList.remove("mrighton")
  aboutusmleft.classList.remove("mlefton")
  aboutusmtop.classList.remove("mtopon")
  aboutusms.forEach((e) => {
    e.classList.remove("fadep")
  })
}

function fadems() {
  aboutusms.forEach((e) => {
    e.classList.add("fadep")
  })
}

function onbotm() {
  clearms()
  // fadems()
  aboutusmbot.classList.toggle("mboton")
}
function onrightm() {
  clearms()
  // fadems()
  aboutusmright.classList.toggle("mrighton")
}
function onleftm() {
  clearms()
  // fadems()
  aboutusmleft.classList.toggle("mlefton")
}
function ontopm() {
  clearms()
  // fadems()
  aboutusmtop.classList.toggle("mtopon")
}
