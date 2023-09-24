document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        const isUserFound = registeredUsers.some(user => user.username === username && user.password === password);
        if (isUserFound) {
            // Login berhasil
            message.textContent = "Login berhasil! Redirecting...";
            message.style.color = "green";

            // Menampilkan alert login berhasil
            alert("Login berhasil!");

            setTimeout(function () {
                window.location.href = "home.html"; // Ganti dengan halaman yang sesuai
            }, 1000);
        } else {
            // Login gagal
            message.textContent = "Login gagal. Coba lagi.";
            message.style.color = "red";

            // Menampilkan alert login gagal
            alert("Login gagal. Coba lagi.");
        }

        // Kosongkan field input setelah submit
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    });
});
