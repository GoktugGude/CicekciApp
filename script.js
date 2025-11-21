const hamburger = document.getElementById("hamburger");
const mobilmenu = document.getElementById("mobileMenu");
const hamburgerClose = document.getElementById("hamburger-close");
const ball = document.getElementById("ball")
const items = document.querySelectorAll("body,.navbar-wrapper,.navbar-wrapper a,.logo-wrapper,.logo-wrapper img,.slogan-text p,.toggle-ball,.all-products,p,.card-picture img,footer,.footer-container, a,h2,h3,button,.container");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // tıklamayı sayfaya iletme
    mobileMenu.classList.toggle("active");
});

mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

hamburgerClose.addEventListener("click",(e)=>{
    mobileMenu.classList.toggle("active");
    
});
    

document.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

ball.addEventListener("click", function(){
items.forEach((item)=> item.classList.toggle("dark"));
})