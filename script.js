// Contador de presentes comprados
let totalGifts = document.querySelectorAll('li').length;
let boughtGifts = 0;

function markAsBought(button) {
    const listItem = button.parentElement;
    listItem.classList.add('bought');
    button.textContent = "Comprado!";
    button.disabled = true;
    boughtGifts++;
    updateGiftCount();
}

function updateGiftCount() {
    document.getElementById('gift-count').textContent = `${boughtGifts} de ${totalGifts} presentes comprados!`;
}

// Inicialize o contador ao carregar a página
updateGiftCount();

// Função para marcar como favorito
function markAsFavorite(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle('favorite');
    button.textContent = listItem.classList.contains('favorite') ? "Favoritado 💖" : "Favoritar";
}
