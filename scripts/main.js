document.addEventListener('DOMContentLoaded', function () {
  // 1. Animation de bienvenue (intro)
  const introText = document.querySelector('.intro h1');
  const introParagraph = document.querySelector('.intro p');
  introText.classList.add('animate__animated', 'animate__fadeInUp');
  introParagraph.classList.add('animate__animated', 'animate__fadeInUp');
  
  // 2. Animation sur les liens du menu
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
          link.style.color = '#ff7f50'; // Changer la couleur du lien
      });
      link.addEventListener('mouseout', () => {
          link.style.color = ''; // Revenir à la couleur d'origine
      });
  });

  const projectCards = document.querySelectorAll('.card');
  projectCards.forEach(card => {
      card.addEventListener('mouseover', function () {
          card.classList.add('animate__animated', 'animate__zoomIn');
      });
      card.addEventListener('mouseout', function () {
          card.classList.remove('animate__animated', 'animate__zoomIn');
      });
  });
});

