const showModalButton = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

showModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
