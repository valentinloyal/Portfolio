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