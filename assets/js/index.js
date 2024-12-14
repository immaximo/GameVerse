const searchInput = document.getElementById('search-input');
const gameCards = document.querySelectorAll('.game-card');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase().replace(/\s+/g, ''); 

    gameCards.forEach(card => {
        const gameTitle = card.querySelector('.game-title').textContent.toLowerCase().replace(/\s+/g, ''); 
        
      
        if (gameTitle.includes(searchValue)) {
            card.style.display = '';
        } else {
            card.style.display = 'none'; 
        }
    });
});
