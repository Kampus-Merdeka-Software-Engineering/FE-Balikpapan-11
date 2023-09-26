const showPopupBtn = document.querySelector(".login-btn");
const fromPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .back-btn");
const loginSignupLink = document.querySelectorAll(".form-box .button-link a");
// tampilan popup pada saat di klik
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// menghilangkan popup pada saat di klik
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        fromPopup.classList[link.id === "signup-link" ?  "add" : "remove"]("show-signup");
    });
});