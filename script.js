const musica = document.getElementById("musica");
const entrada = document.getElementById("entrada");
const entrar = document.getElementById("entrar");
const botao = document.getElementById("botao");

function mostrarimagem() {
    document.getElementById("i").style.display = "block";
}

entrar.addEventListener("click", () => {
    musica.play().catch(erro => console.error("Erro ao tocar a música:", erro));
    entrada.classList.add("sumir");
});

botao.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        botao.textContent = "⏸ Pausar";
    } else {
        musica.pause();
        botao.textContent = "▶ Tocar";
    }
});
