const showModalButton = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");
const playlistForm = document.getElementById("playlist-form");

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

playlistForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById("nama").value;
    const gambarLink = document.getElementById("gambar").value;
    const videoLink = document.getElementById("video").value;

    // Lakukan sesuatu dengan nilai-nilai ini, misalnya simpan di variabel atau kirim ke server
    console.log("Title:", title);
    console.log("Gambar Link:", gambarLink);
    console.log("Video Link:", videoLink);

    // Tutup modal
    modal.style.display = "none";
});