document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate__fadeInUp");
          }
      });
  });

  document.querySelectorAll(".card").forEach(card => {
      observer.observe(card);
  });

  
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".card");

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          const filter = button.getAttribute("data-filter");

          projectCards.forEach(card => {
              const category = card.getAttribute("data-category");

              if (filter === "all" || category === filter) {
                  card.style.display = "block";
                  setTimeout(() => card.classList.remove("hidden"), 100); 
              } else {
                  card.classList.add("hidden");
                  setTimeout(() => (card.style.display = "none"), 200); 
              }
          });

          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
      });
  });
});


