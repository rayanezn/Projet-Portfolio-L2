document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            // Récupère les valeurs des champs
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Affiche l'alerte personnalisée
            alert(`Bonjour ${name},\n\nJ'ai bien reçu votre message : "${message}".\nJe vous contacterai dans les plus brefs délais à votre adresse mail: ${email}.`);

            // Réinitialise le formulaire
            contactForm.reset();

            // Met un message de confirmation dans le feedback
            formFeedback.textContent = "Votre message a été envoyé avec succès.";
            formFeedback.style.color = "green";
        });
    }
});


