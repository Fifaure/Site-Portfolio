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

document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("moteurTable");
  const rows = Array.from(table.getElementsByTagName("tr"));
  const headers = rows.shift(); // On enlève la première ligne qui est l'en-tête

  // Fonction pour transformer la date au format YYYY-MM-DD
  const formatDate = (dateString) => {
      const dateParts = dateString.split('/');
      return new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`); // Renvoie un objet Date avec le bon format
  };

  // Trier les lignes par date
  rows.sort((rowA, rowB) => {
      const dateA = rowA.cells[2].textContent.trim(); // La date est dans la troisième cellule
      const dateB = rowB.cells[2].textContent.trim();
      
      const dateAFormatted = formatDate(dateA);
      const dateBFormatted = formatDate(dateB);

      return dateBFormatted - dateAFormatted; // Trie du plus récent au plus ancien
  });

  // Ajouter les lignes triées dans le tableau
  rows.forEach(row => table.appendChild(row));

  // Ajouter l'en-tête en premier
  table.insertBefore(headers, table.firstChild);
});