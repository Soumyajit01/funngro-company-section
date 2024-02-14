viewHamMenu = document.getElementById("viewHamMenu")
closeHamMenu = document.getElementById("closeHamMenu")
closeHamMenu.style.display = 'none';

viewHamMenu.addEventListener("click", () => {
    document.querySelector(".hamMenu").classList.toggle("hamMenu-visible")
    viewHamMenu.style.display = 'none';
    closeHamMenu.style.display = 'block';
})
closeHamMenu.addEventListener("click", () => {
    document.querySelector(".hamMenu").classList.toggle("hamMenu-visible")
    viewHamMenu.style.display = 'block';
    closeHamMenu.style.display = 'none';
})