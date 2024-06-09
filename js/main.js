document.addEventListener("DOMContentLoaded", function() {
    let token = localStorage.getItem("token");
    console.log(token);

    if (token) {
        // Si hay un token, redirige al usuario a la página principal
        if (window.location.pathname !== "/index.html") {
            window.open("../index.html", "_self");
        }
    } 
    // else {
    //     // Si no hay token, redirige al usuario a la página de inicio de sesión
    //     if (window.location.pathname !== "/login/login.html") {
    //         window.open("../login/login.html", "_self");
    //     }
    // }
});