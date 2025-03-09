document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.querySelector('.menu-items');
  
    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        menuItems.style.transform = 'translateY(0)';
      } else {
        menuItems.style.transform = 'translateY(-150%)';
      }
    });
  });

// Sélectionner les boutons pour ajouter une interaction
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Bouton cliqué: ' + button.parentElement.querySelector('.card-title').textContent);
        });
    });
});