// Menu hamburger
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuItems = document.querySelector('.menu-items');

  if (menuToggle && menuItems) {
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
  }
});

// ============================================
// ANIMATIONS AU SCROLL - IntersectionObserver
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Script chargé - Initialisation des animations');

  // Configuration de l'observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Déclenche quand 20% de l'élément est visible
  };

  // Observer pour les titres
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Titre visible:', entry.target);
        entry.target.classList.add('animate');
        titleObserver.unobserve(entry.target); // Ne plus observer après animation
      }
    });
  }, observerOptions);

  // Observer pour le contenu
  const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Contenu visible:', entry.target);
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, 150);
        contentObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer pour les cartes
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Carte visible:', entry.target);
        entry.target.classList.add('animate');
        cardObserver.unobserve(entry.target);
      }
    });
  }, { ...observerOptions, threshold: 0.1 });

  // Sélectionner et observer les éléments
  const titles = document.querySelectorAll('.animationTitle');
  const contents = document.querySelectorAll('.animationContent');
  const cards = document.querySelectorAll('.card, .cardS, .cardActi');

  console.log('Titres trouvés:', titles.length);
  console.log('Contenus trouvés:', contents.length);
  console.log('Cartes trouvées:', cards.length);

  titles.forEach(el => titleObserver.observe(el));
  contents.forEach(el => contentObserver.observe(el));
  cards.forEach(el => cardObserver.observe(el));
});

// ============================================
// Interactions cartes
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const cardActis = document.querySelectorAll('.cardActi');
  
  cardActis.forEach(card => {
    const buttons = card.querySelectorAll('.contentButton');
    const projectDescription = card.querySelector('.project-description');
    const icon = card.querySelector('.icon');
    const paragraphs = card.querySelectorAll('.project-description p');

    paragraphs.forEach(p => {
      p.style.display = 'none';
    });

    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        const projectId = button.getAttribute('id');
        if (projectId) {
          paragraphs.forEach(p => {
            p.style.display = 'none';
          });
          const targetParagraph = document.getElementById(projectId);
          if (targetParagraph) {
            targetParagraph.style.display = 'block';
          }
          if (projectDescription) projectDescription.style.opacity = '1';
          if (icon) icon.style.opacity = '0';
        }
      });

      button.addEventListener('mouseleave', () => {
        if (projectDescription) projectDescription.style.opacity = '0';
        if (icon) icon.style.opacity = '1';
      });
    });
  });
});
