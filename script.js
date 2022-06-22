
window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    
    if(scrollY > 0){
        const nav = document.getElementById("navigation")
        const button = document.getElementById("buttonUp")
    nav.removeAttribute("hidden")
    button.removeAttribute("hidden")
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
    
    } 
    else {
        const nav = document.getElementById("navigation")
        const button = document.getElementById("buttonUp")
    nav.setAttribute("hidden", "hidden") 
    button.setAttribute("hidden", "hidden")
    
    }
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;
     const sectionTop = section.offsetTop
     const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

     const sectionsEndsAt = sectionTop + sectionHeight;

     const sectionEndPassedTargetLine = sectionsEndsAt <= targetLine

     const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

     const sectionId = section.getAttribute('id')

     const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')

    if (sectionBoundaries) {
        menuElement.classList.add('active')
        
    }
}



function openMenu(){
    document.body.classList.add('menu-expanded')
    navigation.removeAttribute("hidden")
    
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home img,
.atributes .atribute,
#services .card,
#about h2,
#about h4,
#about p,
#contact`)