let token = localStorage.getItem("token");

function modificarHTML() {
    let loginContainer = document.querySelector(".d-flex.mr-2");

    let createPostLink = document.createElement("a");
    createPostLink.setAttribute("href", "../views/postForm.html"); 
    createPostLink.classList.add("my-auto", "create-account"); 
    createPostLink.textContent = "Create post"; 

    loginContainer.innerHTML = "";

    loginContainer.appendChild(createPostLink);
}

if (token) {
    modificarHTML();
}