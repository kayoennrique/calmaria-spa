function toggleModal(modalId, open) {
    const modal = document.querySelector(`#${modalId}`);

    if (open) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }

    document.body.style.overflow = open ? "hidden" : "auto";
}


function toggleSubmenu(item, show) {
    const submenu = item.querySelector(".submenu");

    if (submenu) {
        submenu.style.display = show ? "block" : "none";

        const menuItem = item.querySelector(".header__list-item a");
        menuItem.setAttribute("aria-expanded", show ? true : false);

        const DropdownExpandedIcon = item.querySelector(
            ".material-symbols-outlined.icone"
        );

        DropdownExpandedIcon.classList.toggle("active", show);
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