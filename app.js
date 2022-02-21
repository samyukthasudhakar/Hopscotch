const toggleBtn = document.querySelector("#toggle-btn");
let optionLabel = document.querySelectorAll(".option-label");
let scoreContainer = document.querySelectorAll(".score-container");
optionLabel = [...optionLabel];
scoreContainer = [...scoreContainer];

const setDarkMode = () => {
    toggleBtn.innerHTML = "<img src='assets/images/light_mode.svg'>"
    toggleBtn.value = "light-mode"
    document.body.style.backgroundColor = "#000000e7";
    document.body.style.color = "#ffffff";
    optionLabel.map(item => item.style.color = "black");
    scoreContainer.map(item => item.style.color = "black");
}

const setLightMode = () => {
    toggleBtn.innerHTML = "<img src='assets/images/dark_mode.svg'>"
    toggleBtn.value = "dark-mode"
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "black";
    
}

if(localStorage.getItem('mode')==='dark'){
    setDarkMode()
}

toggleBtn.addEventListener("click",()=>{
    if(toggleBtn.value === "dark-mode"){
        setDarkMode()
        localStorage.setItem('mode','dark')
    }else{
        setLightMode()
        localStorage.setItem('mode','light')
    }
})

menuBtn = document.querySelector(".menu-btn");
navContainer = document.querySelector(".nav-pill-container");

menuBtn.addEventListener('click',()=>{
    console.log('clicked')
    console.log(navContainer.style.display)
    if (navContainer.style.display === 'none'){
        navContainer.style.display = 'block'
    }else{
        navContainer.style.display = 'none'
    }
})