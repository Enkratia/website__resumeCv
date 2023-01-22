/*====================== SHOW MENU =====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav) {
      toggle.addEventListener('click', ()=> {
          nav.classList.toggle('show-menu')
    });
  }
}
showMenu('nav-toggle','nav-menu');

//====================== REMOVE MENU MOBILE =====================//
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//====================== SCROLL SECTIONS ACTIVE LINK =====================//
const sections = document.querySelectorAll('section[id]');
console.log(sections)

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

//====================== SHOW SCROLL-UP =====================//
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop);

//====================== DARK LIGHT THEME =====================//
const themeButton = document.getElementById('theme-button');

window.onload = () => {
  let selectedTheme = localStorage.getItem('selected-theme');
  if (selectedTheme === "dark-theme") themeButton.click();
}

function toggleDarkMode () {
  selectedTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "";
  localStorage.setItem('selected-theme', selectedTheme);
  
  if (selectedTheme === "dark-theme") {
    themeButton.classList.replace("bx-moon", "bx-sun");
    return;
  } 
  themeButton.classList.replace("bx-sun", "bx-moon");
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme");
  toggleDarkMode();
}); 

//====================== REDUCE THE SIZE AND PRINT =====================//
function scaleCv() {
  document.body.classList.add("scale-cv");
}

function removeScale() {
  document.body.classList.remove("scale-cv");
}

let resumeButton = document.getElementById("resume-button");
let areaCv = document.getElementById("area-cv");

var opt = {
  margin:       0,
  filename:     'myResume.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { format: 'a4', orientation: 'portrait' }
};

function generateResume() {
  html2pdf(areaCv, opt);
}

resumeButton.addEventListener("click", () => {
  scaleCv();

  generateResume();

  setTimeout(removeScale, 5000);
});


