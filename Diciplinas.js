function leiaMais() {
    var Matematica = document.getElementById("Matematica");
    var butaoMat = document.getElementById("butaoMat");

    if (Matematica.style.display === "inline") {
        Matematica.style.display = "none";
        butaoMat.innerHTML = "Conteudos";
    } else {
        Matematica.style.display = "inline";
        butaoMat.innerHTML = "Resumir";
    }
}