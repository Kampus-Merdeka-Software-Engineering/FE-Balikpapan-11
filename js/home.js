let logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', function() {
    alert = ("anda telah logout!!!")
    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 100);
    
}); 