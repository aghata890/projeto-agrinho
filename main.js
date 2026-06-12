document.addEventListener("DOMContentLoaded", () => {

    // BOTÃO VOLTAR AO TOPO
    const btnTopo = document.getElementById("topo");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 300){
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top:0, behavior:"smooth" });
    });

    // ANIMAÇÃO DOS CARDS
    const cards = document.querySelectorAll(".card");

    function mostrarCards(){
        const triggerBottom = window.innerHeight * 0.8;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < triggerBottom){
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", mostrarCards);
    window.addEventListener("load", mostrarCards);

    // MODO ESCURO / CLARO
    const btnModo = document.getElementById("modo");

    btnModo.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            btnModo.textContent = "☀️ Modo Claro";
        } else {
            btnModo.textContent = "🌙 Modo Escuro";
        }
    });

});