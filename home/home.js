function navigateTo(page, button) {
    button.classList.add('grow-button-profile');

    setTimeout(function() {
        window.location.href = page;
    }, 200); 
}


document.getElementById('profile-btn').addEventListener('click', function() {
    navigateTo('../profile/profile.html', this);
});
document.getElementById('competence-btn').addEventListener('click', function() {
    navigateTo('../competence/competence.html', this);
});
document.getElementById('experience-btn').addEventListener('click', function() {
    navigateTo('../experience/experience.html', this);
});
document.getElementById('scolarite-btn').addEventListener('click', function() {
    navigateTo('../scolarite/scolarite.html', this);
});
document.getElementById('contact-btn').addEventListener('click', function() {
    navigateTo('../contact/contact.html', this);
});

// Ce code est exécuté uniquement sur home.html

window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Vérifie si un thème est déjà enregistré dans localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Si un thème est sauvegardé, applique-le
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Récupérer le bouton toggle
    const toggleButton = document.getElementById('togglebtn');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light'); // Sauvegarde la préférence
            } else {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark'); // Sauvegarde la préférence
            }
        });
    }
});
