document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    const skillCards = document.querySelectorAll('.skill-card');
    const skillsSection = document.querySelector('main'); // La section contenant les compétences.
  
    // Initialisation : Les barres commencent à 0%
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
  
    // Observateur pour les barres de progression
    const progressObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skillBars.forEach(bar => {
              const targetWidth = bar.getAttribute('data-width'); // Récupère la largeur cible
              bar.style.width = targetWidth; // Anime vers la largeur finale
            });
            // Déconnecte l'observateur après déclenchement
            progressObserver.disconnect();
          }
        });
      },
      {
        root: null, // Utilise la fenêtre comme référence
        threshold: 0.1, // Déclenche lorsque 10% de la section est visible
      }
    );
  
    // Active l'observation pour la section des barres de progression
    progressObserver.observe(skillsSection);
  
    // Observateur pour les cartes
    const cardObserver = new IntersectionObserver(
      (entries) => {
        let delay = 0; // Réinitialise le délai pour chaque rangée visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
  
            // Applique un délai basé sur l'ordre d'apparition dans la vue visible
            card.style.transitionDelay = `${delay}s`;
            delay += 0.2; // Augmente le délai pour la prochaine carte visible
  
            // Classe pour rendre la carte visible
            card.classList.add('visible');
  
            // Arrêter d'observer cette carte
            cardObserver.unobserve(card);
          }
        });
      },
      {
        root: null, // Fenêtre comme référence
        threshold: 0.1, // Déclenche lorsque 10% de la carte est visible
      }
    );
  
    // Observer chaque carte
    skillCards.forEach((card) => {
      cardObserver.observe(card);
    });
  });
  
  

