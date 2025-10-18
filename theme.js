
window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    // Vérifie si un thème est déjà enregistré dans localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Applique le thème sauvegardé (dark ou light)
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});
