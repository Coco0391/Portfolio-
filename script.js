// Menu responsive
const toggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Validation du formulaire
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = "✅ Merci pour votre message, je vous répondrai bientôt !";
    msg.style.color = "green";
    form.reset();
});

// Animation des barres de compétences au scroll
const skills = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;
    skills.forEach(skill => {
        const boxTop = skill.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            skill.style.width = skill.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
});
