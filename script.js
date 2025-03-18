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

// Gestion des animations au scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('#qui, #parc, #stage, #act');
  const vh30 = window.innerHeight * 0.3; // 60% de la hauteur de la fenêtre

  function checkVisibility() {
    sections.forEach(section => {
      if (!section.classList.contains('animated')) {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        
        if (visibleHeight >= vh30) {
          // Récupérer tous les éléments à animer dans la section
          const animatedElements = section.querySelectorAll('.animationTitle, .animationContent');
          
          // Animer chaque élément avec un délai
          animatedElements.forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('animate');
            }, index * 200); // Délai de 200ms entre chaque animation
          });

          section.classList.add('animated');
        }
      }
    });
  }

  // Vérifier la visibilité au chargement et au scroll
  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});


// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.contentButton');
    const projectContents = document.querySelectorAll('.project-content');
    const defaultImage = document.querySelector('.face1:not(.project-content)');

    // Fonction pour afficher le contenu du projet
    function showProject(projectId) {
        // Cacher tous les contenus de projet
        projectContents.forEach(content => {
            content.classList.remove('active');
        });

        // Afficher le contenu du projet sélectionné
        const selectedProject = document.getElementById(projectId);
        if (selectedProject) {
            selectedProject.classList.add('active');
        }
    }

    // Gérer le survol des boutons
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const projectId = button.getAttribute('data-project');
            showProject(projectId);
        });

        button.addEventListener('mouseleave', () => {
            // Revenir à l'image par défaut
            projectContents.forEach(content => {
                content.classList.remove('active');
            });
        });
    });
});
