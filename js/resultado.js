window.onload = function() {
    alert("Se a gente ganhar o Hexa, eu nunca mais reclamo de nenhum bug no meu código.");
};

const resultadoNome = document.getElementById('nome');
const resultadoEmail = document.getElementById('email');
const resultadoPais = document.getElementById('pais');
const resultadoNascimento = document.getElementById('nascimento');

if (
    resultadoNome &&
    resultadoEmail &&
    resultadoPais &&
    resultadoNascimento &&
    window.location.pathname.includes("resultado.html")
) {
    const urlParams = new URLSearchParams(window.location.search);

    const nomeEnviado = urlParams.get('nome');
    const emailEnviado = urlParams.get('email');
    const nascimentoEnviado = urlParams.get('nascimento');
    const paisEnviado = urlParams.get('pais');

    let idadeTexto = "Não informado";
    let classificacao = "Não informada";
    let dataFormatadaBR = "Não informado";

    if (nascimentoEnviado) {

        const partesData = nascimentoEnviado.split("-");

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
        }
    }

    resultadoNome.textContent = nomeEnviado || "Não informado";
    resultadoEmail.textContent = emailEnviado || "Não informado";
    resultadoPais.textContent = paisEnviado || "Não informado";

    if (nascimentoEnviado) {
        resultadoNascimento.textContent =
            `${dataFormatadaBR} (${idadeTexto} - ${classificacao})`;
    } else {
        resultadoNascimento.textContent = "Não informado";
    }
}


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