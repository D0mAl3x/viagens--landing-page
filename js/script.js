    // Código responsável pelo efeito de animação "fade-in" (aparecimento gradual) nas três 
    // seções da landing page

    // Ouvinte de eventos que vai aguardar o carregamento completo do documento html
    // para em seguida localizar todos os elemtentos que têm a classe "fade-in" (ou seja
    // todas as três seções do documento), armazenando-os na constante "sections".
    //
    // Após encontrá-los e armazená-los, será criado um objeto do tipo "IntersectionObserver"
    // para monitorar suas entradas na área visível da tela (viewport), adicionando a classe
    // "visible" a cada elemento que estiver intersectando a viewport (com pelo menos 20% do 
    // elemento visível):
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    // Iteração sobre a lista de elementos que contém a classe "fade-in" (section), onde cada elemento 
    // será monitorado pelo objeto observer, do tipo IntersectionObserver:
    sections.forEach(section => {
        observer.observe(section);
    });
});
