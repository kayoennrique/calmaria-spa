let lastFocusedElement;

function manageModalFocus(modalId) {
    const modal = document.querySelector(`#${modalId}`);
    const elementsModal = modal.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = elementsModal[0];
    const lastElement = elementsModal[elementsModal.length - 1];

    firstElement.focus();

    modal.addEventListener("keydown", (event) => {
        if (event.key === "Tab") {
            if (event.shiftKey) {
                // If Shift+tab is pressed, and focus is on the first element, move to the last
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // If the Tab key is pressed, and the focus is on the last one, move to the first
                if (
                    document.activeElement === lastElement ||
                    !modal.contains(document.activeElement)
                ) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
}

function toggleModal(modalId, open) {
    const modal = document.querySelector(`#${modalId}`);

    if (open) {
        lastFocusedElement = document.activeElement;

        modal.style.display = "block";
        manageModalFocus(modalId);
    } else {
        modal.style.display = "none";

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    document.body.style.overflow = open ? "hidden" : "auto";
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        toggleModal("see-modal-registered", false);
        toggleModal("see-modal-contact", false);
        toggleModal("see-modal-sent", false);

        document.querySelectorAll(".header__list-item").forEach((item) => {
            toggleSubmenu(item, false);
        });
    }
});


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

/**
 * Accordion
 */
document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => toggleAccordion(button));
});

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.classList.add("expanded");
    const isAlreadyOpen = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion-button").forEach(btn => {
        btn.setAttribute("aria-expanded", "false");

        const content = btn.nextElementSibling;
        content.classList.remove("expanded");
        content.setAttribute("aria-hidden", "true");
    });

    if (!isAlreadyOpen) {
        button.setAttribute("aria-expanded", "true");

        const content = button.nextElementSibling;
        content.classList.add("expanded");

        content.setAttribute("aria-hidden", "false");
    }
}