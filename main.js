
"use strict";

const botaoTrocarImagem = document.getElementById('mudar-img')

const imagens = [
    'url("./img/aizen.png")',
    'url("./img/ichigo.jpg")',
    'url("./img/urahara.png")'
]

let indiceAtual = 0

function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length
    document.documentElement.style.setProperty('--imagem-fundo', imagens[indiceAtual])
}

botaoTrocarImagem.addEventListener('click', trocarImagem)