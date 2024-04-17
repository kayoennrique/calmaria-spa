function toggleSubmenu(item, mostrar) {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
        submenu.style.display = mostrar ? "block" : "none";
    }
}

//select all header__list-item
document.querySelectorAll(".header__list-item").forEach((item) => {
    // add a mouseout listener
    item.addEventListener("mouseover", () => toggleSubmenu(item, true));

    //add a mouseout listener
    item.addEventListener("mouseout", () => toggleSubmenu(item, false));

    item.addEventListener("click", () => {
        const submenu = item.querySelector(".submenu");

        const isDisplayed = submenu.style.display === "block";

        toggleSubmenu(item, !isDisplayed);
    });
});