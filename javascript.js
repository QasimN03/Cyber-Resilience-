const navlinks = document.querySelectorAll(".nav-link");
const currentpage = window.location.href;

navlinks.forEach(navlink => {
    if(navlink.href === currentpage){
        navlink.classList.add("activelink");
    }
})
//// remove header on click //////////////////////////////////////////////////////////////////////
const header = document.querySelector("header");
const nav = document.querySelector('nav');
const menu_icon = document.querySelector(".menu-icon");

    menu_icon.addEventListener("click", function() {
        header.classList.toggle("menu_animation");
        nav.classList.toggle("activenav");
      });

      document.addEventListener("click", function(event) {
        if (
          event.target !== menu_icon &&
          event.target !== header &&
          event.target !== nav &&
          !header.contains(event.target) &&
          !nav.contains(event.target)
        ) {
          header.classList.remove("menu_animation");
          nav.classList.remove("activenav");
        }
      });
////// setting icon ///////////////////////////////////////////////////////////////////////
const setting_icon = document.getElementById("setting_icon");
const setting_page = document.getElementById("setting_page");
const click_rotate = "click_rotate";

setting_icon.onclick = function(){
    setting_icon.classList.toggle(click_rotate);
    setting_page.classList.toggle("show");
    setting_page.style.display = "block";
    header.classList.remove("menu_animation");
    nav.classList.remove("activenav");
}
document.onclick = function(e){
    if (!setting_icon.contains(e.target) && !setting_page.contains(e.target)){
        setting_icon.classList.remove(click_rotate);
        setting_page.classList.remove("show");
        setting_page.style.remove = "block";
    }
}
////// dark mode /////////////////////////////////////////////////////////////////////////////////
function saveDarkModeState(isDarkMode) {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
}
// Function to load dark mode state
function loadDarkModeState() {
    const savedState = localStorage.getItem('darkMode');
    return savedState ? JSON.parse(savedState) : false;
}
// Toggle dark mode button
const darkToggle = document.getElementById('darktoggle');
const modeText = document.getElementById('darkmodetext');
// Load dark mode state when the page loads
window.addEventListener('load', function() {
    const isDarkMode = loadDarkModeState();
    document.body.classList.toggle('dark', isDarkMode);
    darkToggle.checked = isDarkMode;
    updateModeText(isDarkMode);
});
// Attach event listener to the dark mode toggle button
darkToggle.addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark');
    darkToggle.checked = isDarkMode;
    saveDarkModeState(isDarkMode);
    updateModeText(isDarkMode);
});
function updateModeText(isDarkMode) {
    modeText.style.transition = 'opacity 0.3s ease';
    modeText.style.opacity = '0'; // fade out
    setTimeout(() => {
        modeText.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        modeText.style.opacity = '1';  //fade in
    }, 100); // delay of transistion
}
///// card carousel //////////////////////////////////////////////////////////////////////////
var swiper = new Swiper(".carousel", {
  cssMode: true,
  grabCursor: true,
  slidesPerView: 1,
  spacebetween: 0,
  loop: true,
  keyboard:{
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
///####################################################################################################
// let differencesFound = 0;

//         function findDifference() {
//             differencesFound++;
//             document.getElementById('counter').innerText = differencesFound;
//         }































