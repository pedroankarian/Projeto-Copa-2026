window.onload = function() {
    alert("Ao clicar em 'Enviar', você aceita os termos e condições de que sua estabilidade emocional será testada a cada escanteio contra o Brasil.");
};



const elementos = document.querySelectorAll(
  "h1, h2, h3, p, ul, li, tr, td, caption, option, label, input, .sidebar-titulo"
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




const formulario = document.querySelector('form');

if (formulario) {
    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();

        const dadosTorcedor = {
            nome: document.getElementById('nome')?.value || '',
            dataNascimento: document.getElementById('nascimento')?.value || '',
            email: document.getElementById('email')?.value || '',
            pais: document.getElementById('pais')?.value || '',
            jogadorFavorito: document.getElementById('jogador')?.value || ''
        };

        try {
            const resposta = await fetch('http://localhost:3000/salvar-torcedor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosTorcedor)
            });

            if (resposta.ok) {
                const resultado = await resposta.json();
                window.location.href = `resultado.html?id=${resultado.id}`;
            } else {
                alert('Erro ao salvar os dados.');
            }
        } catch (error) {
            console.error(error);
        }
    });
}