/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/

  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function readMore() {
  var readmore = document.getElementById('readmore')
  var hiddentext = document.getElementById('hiddentext')
  var hidenbutton = document.getElementById('hide');
 readmore.style.display = "none";
hiddentext.style.display = "inline";
hidenbutton.style.display = "inline";
  
}

function hide () {
  var hidenbutton = document.getElementById('hide');
  var hiddentext = document.getElementById('hiddentext');
  var readmore = document.getElementById('readmore');
  hidenbutton.style.display = "none";
  hiddentext.style.display = "none";
  readmore.style.display = "inline";
  

};

var noSelect = document.getElementById('noselect');
var selectOne = document.getElementById('select-one');
var selectTwo = document.getElementById('select-two');
var selectThree = document.getElementById('select-three');
function offerOne(){
  noSelect.removeAttribute("selected");
  selectTwo.removeAttribute("selected");
  selectThree.removeAttribute("selected");
  selectOne.setAttribute("selected","true");
  var buttonOne = document.getElementById('button__1');
  var buttonTwo = document.getElementById('button__2');
  var buttonThree = document.getElementById('button__3');
  buttonOne.innerHTML = "Выбрано";
  buttonTwo.innerHTML = "Выбрать";
  buttonThree.innerHTML = "Выбрать";
};

function offerTwo(){

  noSelect.removeAttribute("selected");
  selectOne.removeAttribute("selected");
  selectThree.removeAttribute("selected");
  selectTwo.setAttribute("selected","true");
  var buttonOne = document.getElementById('button__1');
  var buttonTwo = document.getElementById('button__2');
  var buttonThree = document.getElementById('button__3');
  buttonOne.innerHTML = "Выбрать";
  buttonTwo.innerHTML = "Выбрано";
  buttonThree.innerHTML = "Выбрать";
};

function offerThree(){

  noSelect.removeAttribute("selected");
  selectThree.setAttribute("selected","true");
  selectTwo.removeAttribute("selected");
  selectOne.removeAttribute("selected");
  var buttonOne = document.getElementById('button__1');
  var buttonTwo = document.getElementById('button__2');
  var buttonThree = document.getElementById('button__3');
  buttonOne.innerHTML = "Выбрать";
  buttonTwo.innerHTML = "Выбрать";
  buttonThree.innerHTML = "Выбрано";
}

gsap.registerPlugin(ScrollTrigger);
gsap.from("#v-shot",{y:-1050, 
  scrollTrigger:{
      trigger:".container-4",
      start:"top bottom",
      end:"bottom top",
      scrub:0,
      id:"L4",
      //markers: true,
      ease: "none"
}});
