document.addEventListener("DOMContentLoaded", function () {
    const regisForm = document.getElementById("regisForm");

    regisForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

        const userData = {
            username,
            email,
            password,
        };

        let registeredUsers =
            JSON.parse(localStorage.getItem("registeredUsers")) || [];

        registeredUsers.push(userData);

        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        regisForm.reset();

        alert("Registrasi berhasil. Silakan login dengan akun baru Anda.");
        });
});