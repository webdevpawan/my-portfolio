const mobileNavbar = document.getElementById("mobile-navbar");

const active = document.getElementById("active");

mobileNavbar.addEventListener("click",function(){
    
    active.classList.toggle("active");

})