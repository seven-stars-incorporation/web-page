// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    
});



let btnToggle = document.querySelector("#toggle-menu");
let nav = document.querySelector("#navbar-default");

function toggleMenu() {
    nav.classList.toggle("hidden")
    nav.classList.toggle("block")
}

btnToggle.addEventListener('click', function() {
    toggleMenu()
});

let links = document.querySelectorAll(".nav-link");

links.forEach(item =>{
    item.addEventListener("click", toggleMenu)
    item.addEventListener("touch", toggleMenu)
})

// let section = document.querySelectorAll('section');
// window.onscroll = () => {

//     section.forEach(sec => {
//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//           links.forEach(item =>{
//             item.classList.remove('link-active');
//             document.querySelector('.nav-link a[href*='+id+'] ').classList.add('li-active');
//           });
//         };
    
//       });

// }

let toastMessage = document.querySelector("#toast-simple");
let formMessage = document.querySelector("#form-message");

let namex = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");


function showToastMessage() {
    toastMessage.classList.toggle('hidden');
    toastMessage.classList.toggle('flex');
}

function clearFormInput() {
    namex.value = ""; 
    this.email.value = ""; 
    this.message.value = ""; 
}

// formMessage.addEventListener("submit", event => {
   // event.preventDefault();
  //  clearFormInput()
   // showToastMessage();
// })
