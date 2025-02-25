
document.querySelectorAll('.menu-items a').forEach(item => {
	item.addEventListener('click', event => {
	  document.getElementById('menu-toggle').checked = false;
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
