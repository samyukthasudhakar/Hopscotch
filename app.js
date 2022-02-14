toggleBtn = document.querySelector("#toggle-btn");
aLink = document.querySelectorAll("a");
linkBtn = document.querySelectorAll(".link-btn");

aLink = [...aLink]
linkBtn = [...linkBtn]

toggleBtn.addEventListener("click",()=>{
    if(toggleBtn.value === "dark-mode"){
        toggleBtn.innerHTML = "<img src='assets/images/light_mode.svg'>"
        toggleBtn.value = "light-mode"
        document.body.style.backgroundColor = "#000000e7";
        document.body.style.color = "#ffffff";        
    }else{
        toggleBtn.innerHTML = "<img src='assets/images/dark_mode.svg'>"
        toggleBtn.value = "dark-mode"
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "black";
    }
})