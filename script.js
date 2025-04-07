var navbar = document.querySelector(".navbar");


document.addEventListener('DOMContentLoaded', function () {
    const gridCards = document.querySelectorAll('.grid-card');
  
    gridCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        alert(`You clicked card #${index + 1}`);
        card.classList.toggle('active-card');
      });
    });
  });
  