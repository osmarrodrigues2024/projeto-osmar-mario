

const botaoFecharModal = document.querySelector(".fechar-modal");
const botaoFilme = document.querySelector(".botao-filme");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}


botaoFilme.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});




