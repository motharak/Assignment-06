function logout(){
    window.location.href = "login.html";
    localStorage.clear();
}

let btnLogout = document.getElementById('logout');
btnLogout.addEventListener('click',logout);