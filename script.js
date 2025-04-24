document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.querySelector('.menu-items');
  
    menuToggle.addEventListener('change', () => {
      if (menuToggle.checked) {
        menuItems.style.transform = 'translateY(0)';
        menuItems.style.opacity = '1';
        menuItems.style.visibility = 'visible';
      } else {
        menuItems.style.transform = 'translateY(-150%)';
        menuItems.style.opacity = '0';
        menuItems.style.visibility = 'hidden';
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

// Tri des cards dans veille.html par date (du plus récent au plus ancien)
document.addEventListener("DOMContentLoaded", function() {
  // Vérifier si nous sommes sur la page veille.html
  if (window.location.pathname.includes('veille.html')) {
    const container = document.querySelector('.card-container');
    if (container) {
      const cards = Array.from(container.querySelectorAll('.card'));
      
      // Fonction pour transformer la date au format Date
      const formatDate = (dateString) => {
        // Si la date est juste "2025" (année sans jour ni mois), on la transforme en 31/12/2025
        if (dateString === "2025") {
          return new Date(2025, 11, 31); // Décembre = 11 (index 0-based)
        }
        
        const dateParts = dateString.split('/');
        return new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`); // format JJ/MM/AAAA
      };
      
      // Trier les cartes par date
      cards.sort((cardA, cardB) => {
        const dateA = cardA.querySelector('h4').textContent.trim();
        const dateB = cardB.querySelector('h4').textContent.trim();
        
        // Vérifier si l'une des cartes contient 2025 dans sa date
        const isA2025 = dateA.includes("2025");
        const isB2025 = dateB.includes("2025");
        
        // Si les deux cartes sont de 2025, on les trie normalement entre elles
        if (isA2025 && isB2025) {
          const dateAFormatted = formatDate(dateA);
          const dateBFormatted = formatDate(dateB);
          return dateBFormatted - dateAFormatted; // Du plus récent au plus ancien
        }
        
        // Si seule la carte A est de 2025, elle vient en premier
        if (isA2025) return -1;
        
        // Si seule la carte B est de 2025, elle vient en premier
        if (isB2025) return 1;
        
        // Si aucune n'est de 2025, on trie normalement
        const dateAFormatted = formatDate(dateA);
        const dateBFormatted = formatDate(dateB);
        return dateBFormatted - dateAFormatted; // Du plus récent au plus ancien
      });
      
      // Retirer toutes les cartes
      cards.forEach(card => card.remove());
      
      // Ajouter les cartes triées
      cards.forEach(card => container.appendChild(card));
    }
  }
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
  const sections = document.querySelectorAll('#qui, #parc, #act, #stage1, #stage2, #stageTitle');
  const vh30 = window.innerHeight * 0.3; // 30% de la hauteur de la fenêtre

  function checkVisibility() {
    sections.forEach(section => {
      if (!section.classList.contains('animated')) {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        
        if (visibleHeight >= vh30) {
          section.classList.add('animate');

          // D'abord, animer les titres
          const titleElements = section.querySelectorAll('.animationTitle');
          titleElements.forEach((element) => {
            element.classList.add('animate');
          });

          const titleElements2 = section.querySelectorAll('.animationTitle2');
          titleElements2.forEach((element) => {
            element.classList.add('animate');
          });
          
          // Ensuite, animer le contenu avec un délai réduit
          const contentElements = section.querySelectorAll('.animationContent');
          contentElements.forEach((element) => {
            element.classList.add('animate');
          });
          
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
