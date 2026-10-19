function mostrarimagem() {
    document.getElementById("i").style.display = "block";
}

const musica = document.getElementById("musica");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
    if (musica.paused) {
        musica.play()
            .then(() => {
                botao.textContent = "⏸ Pausar";
            })
            .catch(erro => {
                console.error("Erro ao tocar a música:", erro);
            });
    } else {
        musica.pause();
        botao.textContent = "▶ Tocar";
    }
});
