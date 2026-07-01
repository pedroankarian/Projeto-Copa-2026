window.onload = function() {
    alert("Se você não acredita no Hexa em 2026, você está no site errado.");
};


const elementos = document.querySelectorAll(
  "h1, h2, h3, p, ul, li, tr, td, caption, .sidebar-titulo"
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