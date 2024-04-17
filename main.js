document.querySelectorAll(".header__list-item").forEach(
    (item,
    () => {
    // adicionar um ouvinte mouseover
    item.addEventListener("mouseover", () => toggleSubmenu(item, true));

    // adicionar um ouvinte mouseout
    item.addEventListener("mouseout", () => toggleSubmenu(item, false));

    })
);