document.querySelectorAll(".header__list-item").forEach(
    (item,
        () => {
            // add a mouseover listener
            item.addEventListener("mouseover", () => toggleSubmenu(item, true));

            // add a mouseout listener
            item.addEventListener("mouseout", () => toggleSubmenu(item, false));

            item.addEventListener("click", () => {
                const submenu = item.querySelector(".submenu");

                const isDisplayed = submenu.style.display === "block";

                toggleSubmenu(item, !isDisplayed);
            });
        })
);