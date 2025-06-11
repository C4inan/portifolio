
function carousel_back() {
    const carousel_item_focus = document.querySelector(".carousel-item.focus");
    carousel_item_focus.classList.remove("focus");

    var previous_project = carousel_item_focus.previousElementSibling;

    if (!previous_project) {
        previous_project = carousel_item_focus.parentElement.lastElementChild;
    }
    previous_project.classList.add("focus");
}

function carousel_next() {
    const carousel_item_focus = document.querySelector(".carousel-item.focus");
    carousel_item_focus.classList.remove("focus");

    var next_project = carousel_item_focus.nextElementSibling;

    if (!next_project) {
        next_project = carousel_item_focus.parentElement.firstElementChild;
    }
    next_project.classList.add("focus");
}
