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
  

}


