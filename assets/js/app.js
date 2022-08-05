const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const cont = document.querySelector("#cont-menu");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//cont.addEventListener("click", () => {
//  ul.classList.toggle("show");
//  console.log("hola");
//});
// Close hamburger menu when a link is clicked
const but = document.getElementById('top-skills')
// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
let skillsArray = document.getElementsByClassName("icon-card");
let src1 = "./assets/icons/catia.png";
let src2 = "./assets/icons/open-vsp.png";
let src3 = "./assets/icons/px4.png";
let src4 = "./assets/icons/qgc.png";
let src5 = "./assets/icons/matlab.png";
let src6 = "./assets/icons/flight-stream.png";
let src7 = "./assets/icons/autocad.png";
let src8 = "./assets/icons/raspberry-pi.png";
let src9 = "./assets/icons/arduino.png";
let src10 = "./assets/icons/cura.png";
let src11 = "./assets/icons/icons8-html-5.svg";
let src12 = "./assets/icons/icons8-css3.svg";
let src13 = "assets/icons/icons8-javascript.svg";
let src14 = "./assets/icons/threejs.png";
let src15 = "./assets/icons/python.png";
let src16 = "./assets/icons/cplusplus.png";
let src17 = "./assets/icons/golang.png";
let src18 = "./assets/icons/swift.png";
let src19 = "./assets/icons/autopsy.png";
let src20 = "./assets/icons/ghidra.png";

const skills1 = [src11,src12,src13,src14,src15,src16,src17,src18,src19,src20];
const skills2 = [src1,src2,src3,src4,src5,src6,src7,src8,src9,src10];
let count = 0;

var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

input.addEventListener('change',function(){
  let counter = 0;
  if(this.checked) {
     //outputtext.innerHTML = "aktiv";
      for (let elem of skillsArray) {
         elem.src = skills2[counter];
         counter++;
       };
  } else {
    for (let elem of skillsArray) {
      elem.src = skills1[counter];
    counter++;
    };
    counter = 0;
  }
});

