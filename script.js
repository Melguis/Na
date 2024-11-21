document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const valentines = document.querySelector('.valentines');
    const card = document.querySelector('.card');

    let isCardUp = false;

    container.addEventListener('mouseenter', function () {
        card.style.transition = 'top 0.5s ease';
        card.style.top = '-90px';
    });

    container.addEventListener('mouseleave', function () {
        card.style.transition = 'top 0.5s ease';
        card.style.top = '5px';
    });

    valentines.addEventListener('click', function () {
        card.style.transition = 'top 0.5s ease';
        if (isCardUp) {
            card.style.top = '5px'; // Move card down
        } else {
            card.style.top = '-90px'; // Move card up
        }
        isCardUp = !isCardUp; // Toggle the state
    });
});


// Seleciona todos os elementos que queremos observar
const elements = document.querySelectorAll(".fade-in-right, .fade-in-left");

// Configura o IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Verifica se o elemento está visível na tela
        if (entry.isIntersecting) {
            // Adiciona a classe correspondente ao efeito desejado
            if (entry.target.classList.contains("fade-in-right")) {
                entry.target.classList.add("fade-in-right-animate");
            } else if (entry.target.classList.contains("fade-in-left")) {
                entry.target.classList.add("fade-in-left-animate");
            }
            observer.unobserve(entry.target); // Para de observar o elemento após a animação ocorrer
        }
    });
}, {
    threshold: 0.1 // Ativa quando 10% do elemento está visível (ajuste conforme necessário)
});

// Inicia a observação de cada elemento
elements.forEach(element => observer.observe(element));
