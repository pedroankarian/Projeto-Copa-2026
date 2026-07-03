window.onload = function() {
    alert("Se a gente ganhar o Hexa, eu nunca mais reclamo de nenhum bug no meu código.");
};

window.addEventListener('DOMContentLoaded', async () => {
    if (window.location.pathname.includes("resultado.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const idTorcedor = urlParams.get('id');

        if (!idTorcedor) return;

        try {
            const resposta = await fetch(`http://localhost:3000/pegar-torcedor/${idTorcedor}`);
            
            if (resposta.ok) {
                const torcedor = await resposta.json();

                const resultadoNome = document.getElementById('nome');
                const resultadoEmail = document.getElementById('email');
                const resultadoPais = document.getElementById('pais');
                const resultadoNascimento = document.getElementById('nascimento');
                const resultadoJogador = document.getElementById('jogador');

                if (resultadoNome) resultadoNome.textContent = torcedor.nome || "Não informado";
                if (resultadoEmail) resultadoEmail.textContent = torcedor.email || "Não informado";
                if (resultadoPais) resultadoPais.textContent = torcedor.pais || "Não informado";
                if (resultadoJogador) resultadoJogador.textContent = torcedor.jogador_favorito || "Não informado";

                let idadeTexto = "Não informado";
                let classificacao = "Não informada";
                let dataFormatadaBR = "Não informado";

                if (torcedor.data_nascimento) {
                    const partesData = torcedor.data_nascimento.split("-");

                    if (partesData.length === 3) {
                        const ano = parseInt(partesData[0]);
                        const mes = parseInt(partesData[1]) - 1;
                        const dia = parseInt(partesData[2]);

                        dataFormatadaBR = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

                        const dataNascimento = new Date(ano, mes, dia);
                        const hoje = new Date();

                        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
                        const m = hoje.getMonth() - dataNascimento.getMonth();

                        if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
                            idade--;
                        }

                        idadeTexto = `${idade} anos`;

                        if (idade > 70) {
                            classificacao = "Mentiu a idade 🤥";
                        } else if (idade <= 16) {
                            classificacao = "Torcedor Mirim";
                        } else if (idade <= 30) {
                            classificacao = "Torcedor Novato";
                        } else {
                            classificacao = "Torcedor Experiente";
                        }

                        if (resultadoNascimento) {
                            resultadoNascimento.textContent = `${dataFormatadaBR} (${idadeTexto} - ${classificacao})`;
                        }
                    } else {
                        if (resultadoNascimento) resultadoNascimento.textContent = "Não informado";
                    }
                } else {
                    if (resultadoNascimento) resultadoNascimento.textContent = "Não informado";
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
});

const elementos = document.querySelectorAll(
  "h1, h2, h3, p, ul, li, tr, td, caption, option, label, input, div, strong, .sidebar-titulo"
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