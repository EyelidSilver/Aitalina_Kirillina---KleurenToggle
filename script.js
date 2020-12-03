let toggleNavStatus = false;

let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

let home = document.querySelector("ul li:nth-child(1)");
let red = document.querySelector("ul li:nth-child(2)");
let orange = document.querySelector("ul li:nth-child(3)");
let purple = document.querySelector("ul li:nth-child(4)");
let green = document.querySelector("ul li:nth-child(5)");
let background = document.querySelector('body');


background.style.transition = "all 450ms ease-in-out";


let closeMenu = function () {
  getSidebar.style.width = "0px";

  let arrayLength = getSidebarLinks.length;
  for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "0";
  }
  getSidebarUl.style.visibility = "hidden";
};



let toggleNav = function () {

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "150px";


    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "0px";


    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}



let homeColor = function () {
  background.classList.remove("purple", "orange", "red", "green");
  background.classList.add("home");
  document.getElementById("display").innerHTML = "GRAYBLUE";
}

let redColor = function () {
  background.classList.remove("purple", "orange", "home", "green");
  background.classList.add("red");
  document.getElementById("display").innerHTML = "RED";
}

let orangeColor = function () {
  background.classList.remove("purple", "red", "home", "green");
  background.classList.add("orange");
  document.getElementById("display").innerHTML = "ORANGE";
}

let purpleColor = function () {
  background.classList.remove("orange", "red", "home", "green");
  background.classList.add("purple");
  document.getElementById("display").innerHTML = "PURPLE";
}

let greenColor = function () {
  background.classList.remove("purple", "orange", "red", "home");
  background.classList.add("green");
  document.getElementById("display").innerHTML = "GREEN";
}

home.addEventListener("click", homeColor);
red.addEventListener("click", redColor);
orange.addEventListener("click", orangeColor);
purple.addEventListener("click", purpleColor);
green.addEventListener("click", greenColor);



document.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if (e.keyCode === 49) {
    homeColor();
  } else if (e.keyCode === 50) {
    redColor();
  } else if (e.keyCode === 51) {
    orangeColor()
  } else if (e.keyCode === 52) {
    purpleColor()
  } else if (e.keyCode === 53) {
    greenColor()
  }
};