    const hamburger=document.querySelector('.hamburger')
    const navMenu=document.querySelector(".list")
    const navbar=document.querySelector(".navbar")

    hamburger.addEventListener("click",mobileMenu)
    function mobileMenu(){
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
        navbar.classList.toggle("active")

    }