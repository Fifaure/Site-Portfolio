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
  const vh30 = window.innerHeight * 0.3; // 30% de la hauteur de la fenêtre

  function checkVisibility() {
    sections.forEach(section => {
      if (!section.classList.contains('animated')) {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        
        if (visibleHeight >= vh30) {
          // D'abord, animer les titres
          const titleElements = section.querySelectorAll('.animationTitle');
          titleElements.forEach((element) => {
            element.classList.add('animate');
          });
          
          // Ensuite, animer le contenu avec un délai réduit
          setTimeout(() => {
            const contentElements = section.querySelectorAll('.animationContent');
            contentElements.forEach((element) => {
              element.classList.add('animate');
            });
          }, 150); // Réduit de 300ms à 150ms
          
          // Enfin, animer les cartes avec un délai supplémentaire réduit
          setTimeout(() => {
            const cards = section.querySelectorAll('.cardActi');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 100); // Réduit de 200ms à 100ms entre chaque carte
            });
          }, 300); // Réduit de 600ms à 300ms

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
    const cardActis = document.querySelectorAll('.cardActi');
    
    cardActis.forEach(card => {
        const buttons = card.querySelectorAll('.contentButton');
        const projectDescription = card.querySelector('.project-description');
        const icon = card.querySelector('.icon');
        const paragraphs = card.querySelectorAll('.project-description p');

        // Cacher tous les paragraphes au chargement
        paragraphs.forEach(p => {
            p.style.display = 'none';
        });

        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                const projectId = button.getAttribute('id');
                if (projectId) {
                    // Cacher tous les paragraphes
                    paragraphs.forEach(p => {
                        p.style.display = 'none';
                    });
                    // Afficher le paragraphe correspondant
                    const targetParagraph = document.getElementById(projectId);
                    if (targetParagraph) {
                        targetParagraph.style.display = 'block';
                    }
                    // Afficher la description et cacher l'icône
                    projectDescription.style.opacity = '1';
                    icon.style.opacity = '0';
                }
            });

            button.addEventListener('mouseleave', () => {
                // Cacher la description et afficher l'icône
                projectDescription.style.opacity = '0';
                icon.style.opacity = '1';
            });
        });
    });
});
