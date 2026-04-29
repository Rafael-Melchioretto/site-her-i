function login() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("senha").value;
    let erro = document.getElementById("erro");

    // Esconde erro
    erro.classList.add("d-none");

    if (user === "" || pass === "") {
        erro.innerText = "Preencha todos os campos!";
        erro.classList.remove("d-none");
        return;
    }

    if (user === "admin" && pass === "1234") {
        // salva login
        localStorage.setItem("logado", "true");

        // redireciona
        window.location.href = "home.html";
    } else {
        erro.innerText = "Usuário ou senha incorretos!";
        erro.classList.remove("d-none");
    }
}