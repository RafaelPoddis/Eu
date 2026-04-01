const navBtns = document.querySelectorAll(".nav-btn");

function selectedBtn(event){
    const clickedBtn = event.currentTarget;

    const currentActiveBtn = document.querySelector(".nav-btn.selected");
    if (currentActiveBtn){
        currentActiveBtn.classList.remove("selected");
    }

    clickedBtn.classList.add("selected");

}

navBtns.forEach(btn => {
    btn.addEventListener("click", selectedBtn);
});