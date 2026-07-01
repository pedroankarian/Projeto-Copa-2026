window.onload = function() {
    alert("Bem-vindo ao portal da Seleção Brasileira!");
};


const titulo = document.querySelector('#titulo');

if (titulo) {
    titulo.addEventListener('mouseenter', () => {
        titulo.style.color = '#0890ff';
        titulo.style.cursor = 'pointer';
    });

    titulo.addEventListener('mouseleave', () => {
        titulo.style.color = '#ffbb00';
    });

    titulo.addEventListener('click', () => {
        alert(`${titulo.textContent} - Vai Brasil!`);
    });
}

const paragrafocuriosidade = document.querySelector('#paragrafocuriosidade');

if (paragrafocuriosidade) {
    paragrafocuriosidade.addEventListener('dblclick', () => {
        paragrafocuriosidade.textContent =
            "Isso mesmo, o Brasil! Seleção Brasileira é a única a participar de todas as edições da Copa do Mundo de Futebol da FIFA e a maior vencedora da competição, com cinco títulos!";
    });
}

const imagem = document.querySelector('#imagem-titulo');

if (imagem) {
    imagem.style.transition = 'transform 0.3s ease';

    imagem.addEventListener('click', () => {
        const srcAtual = imagem.getAttribute('src');

        if (srcAtual === './../images/brasil.png') {
            imagem.setAttribute('src', './../images/brasil1.png');
        } else {
            imagem.setAttribute('src', './../images/brasil.png');
        }
    });

    imagem.addEventListener('mouseenter', () => {
        imagem.style.transform = 'scale(1.1)';
        imagem.style.cursor = 'pointer';
    });

    imagem.addEventListener('mouseleave', () => {
        imagem.style.transform = 'scale(1)';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#ffe600";
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = ""; 
        });
    });
});


const elementos = document.querySelectorAll(
  "h1, h2, h3, p, ul, li, .sidebar-titulo"
);

elementos.forEach((el) => {
  el.style.transition = "0.25s ease";

  el.addEventListener("mouseenter", () => {
    el.style.transform = "translateY(-2px)";
    el.style.letterSpacing = "0.5px";
    el.style.textShadow = "0 0 8px rgba(0,0,0,0.2)";
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translateY(0)";
    el.style.letterSpacing = "normal";
    el.style.textShadow = "none";
  });
});