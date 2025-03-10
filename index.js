const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNavMenu = document.getElementById('mobile-nav-menu')
hamburgerBtn.onclick = function(){
    mobileNavMenu.classList.toggle('show');
    hamburgerBtn.classList.toggle('active');
}