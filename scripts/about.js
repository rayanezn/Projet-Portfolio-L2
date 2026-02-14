// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionner toutes les sections avec la classe .about-intro, .experience, etc.
  const sections = document.querySelectorAll('.about-intro, .experience, .education, .interests');

  // Fonction pour ajouter une classe 'visible' aux sections quand elles sont visibles
  const animateOnScroll = () => {
      sections.forEach(section => {
          // Vérifier la position de chaque section par rapport à la fenêtre de l'utilisateur
          const sectionPosition = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          // Si la section est visible dans la fenêtre de visualisation, ajouter la classe 'visible'
          if (sectionPosition < windowHeight - 100) {
              section.classList.add('visible');
          } else {
              section.classList.remove('visible');
          }
      });
  };

  // Appeler la fonction au défilement de la page
  window.addEventListener('scroll', animateOnScroll);

  // Appeler immédiatement pour s'assurer que les éléments visibles dès le départ sont animés
  animateOnScroll();
});
